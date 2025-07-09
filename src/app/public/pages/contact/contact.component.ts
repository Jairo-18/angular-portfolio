import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  // Cambiar la referencia para obtener el elemento HTML directamente
  @ViewChild('contactForm', { static: false })
  contactForm!: ElementRef<HTMLFormElement>;

  sendEmail() {
    emailjs
      .sendForm(
        'portfolio', // Tu Service ID
        'requesEmail', // Tu Template ID
        this.contactForm.nativeElement, // Esto ya está correcto
        '-VV6CkUQcp-cIVMS5' // Tu Public Key
      )
      .then(() => {
        alert('¡Mensaje enviado con éxito!');
        this.contactForm.nativeElement.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error al enviar el mensaje.');
      });
  }

  copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // Mostrar notificación de éxito
        const notification = document.createElement('div');
        notification.textContent = '¡Copiado al portapapeles!';
        notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 1000;
        font-size: 14px;
      `;
        document.body.appendChild(notification);

        setTimeout(() => {
          document.body.removeChild(notification);
        }, 2000);
      })
      .catch((err) => {
        console.error('Error al copiar: ', err);
        alert('No se pudo copiar al portapapeles');
      });
  }
}
