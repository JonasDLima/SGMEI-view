import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesProvided } from '../../models/services-provided';
import { ServicesProvidedService } from '../services-provided.service';

@Component({
  selector: 'app-services-provided-delete',
  templateUrl: './services-provided-delete.component.html',
  styleUrls: ['./services-provided-delete.component.css']
})
export class ServicesProvidedDeleteComponent implements OnInit {

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

  deleteServiceProvided(): void {
    const idServices: any = this.route.snapshot.paramMap.get('id');
    this.servicesProvidedService.delete(idServices).subscribe(response => {
      this.servicesProvidedService.showMessage('Produto removido com sucesso!');
      this.router.navigate(['/servicesProvided']);
    })
  }

  cancela(): void {
    this.router.navigate(['/servicesProvided']);
  }

}
