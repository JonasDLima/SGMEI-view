import { Component, OnInit } from '@angular/core';
import { ServicesProvided } from '../../models/services-provided';
import { ServicesProvidedService } from '../services-provided.service';

@Component({
  selector: 'app-services-provided-read',
  templateUrl: './services-provided-read.component.html',
  styleUrls: ['./services-provided-read.component.css']
})
export class ServicesProvidedReadComponent implements OnInit {

  servicesProvided: ServicesProvided[] = [];
  displayedColumns = ['idServices', 'name', 'price', 'type', 'action'];

  constructor(private servicesProvidedService: ServicesProvidedService) { }

  ngOnInit(): void {
    this.servicesProvidedService.read().subscribe(response => {
      this.servicesProvided = response;
      console.log(response);
    })
  }

}
