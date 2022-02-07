import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesProvided } from '../../models/services-provided';
import { ServicesProvidedService } from '../services-provided.service';

@Component({
  selector: 'app-services-provided-create',
  templateUrl: './services-provided-create.component.html',
  styleUrls: ['./services-provided-create.component.css']
})
export class ServicesProvidedCreateComponent implements OnInit {

  serviceProvided: ServicesProvided = {
    name: '',
    price: 0,
    type: ''
  }

  constructor(
    private servicesProvidedService: ServicesProvidedService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    
  }

  createServiceProvided(): void {
    this.servicesProvidedService.create(this.serviceProvided).subscribe(response => {
      this.servicesProvidedService.showMessage('Serviço cadastrado com sucesso!');
      this.router.navigate(['/servicesProvided']);
    })
  }

  cancela(): void {
    this.router.navigate(['/servicesProvided']);
  }


}
