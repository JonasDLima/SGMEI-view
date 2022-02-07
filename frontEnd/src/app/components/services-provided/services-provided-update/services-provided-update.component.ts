import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesProvided } from '../../models/services-provided';
import { ServicesProvidedService } from '../services-provided.service';

@Component({
  selector: 'app-services-provided-update',
  templateUrl: './services-provided-update.component.html',
  styleUrls: ['./services-provided-update.component.css']
})
export class ServicesProvidedUpdateComponent implements OnInit {

  serviceProvided: ServicesProvided = {
    name: '',
    price: 0,
    type: ''
  }

  constructor(
    private servicesProvidedService: ServicesProvidedService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idServices: any = this.route.snapshot.paramMap.get('id');
    this.servicesProvidedService.readById(idServices).subscribe(response => {
      this.serviceProvided = response;
    })
  }

  updateServiceProvided(): void {
    this.servicesProvidedService.update(this.serviceProvided).subscribe(response => {
      this.servicesProvidedService.showMessage('Serviço atualizado com sucesso!');
      this.router.navigate(['/servicesProvided']);
    })
  }

  cancela(): void {
    this.router.navigate(['/servicesProvided']);
  }

}
