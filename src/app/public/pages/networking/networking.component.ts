import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  NETWORK_JOBS,
  NETWORK_SERVICES,
  OTHER_NETWORK_JOBS,
  NetworkJobInterface,
  NetworkServiceInterface
} from '../../constants/networking.constants';

@Component({
  selector: 'app-networking',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './networking.component.html',
  styleUrl: './networking.component.scss'
})
export class NetworkingComponent {
  services: NetworkServiceInterface[] = NETWORK_SERVICES;
  jobs: NetworkJobInterface[] = NETWORK_JOBS;
  otherJobs = OTHER_NETWORK_JOBS;
}
