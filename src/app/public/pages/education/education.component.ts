import { Education } from './../../constants/education.constants';
import { EDUCATIONS } from './../../constants/education.constants';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations: Education[] = EDUCATIONS;
}
