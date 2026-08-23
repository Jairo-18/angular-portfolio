import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  displayedText = '';
  showCursor = true;
  private readonly fullText = 'Desarrollador Full Stack Web & Móvil';
  private typingInterval: ReturnType<typeof setInterval> | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => this.typeText(), 600);
  }

  private typeText() {
    let i = 0;
    this.typingInterval = setInterval(() => {
      if (i < this.fullText.length) {
        this.displayedText += this.fullText[i];
        i++;
        this.cdr.detectChanges();
      } else {
        clearInterval(this.typingInterval!);
      }
    }, 75);
  }

  ngOnDestroy() {
    if (this.typingInterval) clearInterval(this.typingInterval);
  }
}
