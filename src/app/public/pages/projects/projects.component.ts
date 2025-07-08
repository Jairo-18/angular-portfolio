import { Component } from '@angular/core';
import { PROJECTS, ProjectInterface } from '../../constants/projects.constants';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: ProjectInterface[] = PROJECTS;
}
