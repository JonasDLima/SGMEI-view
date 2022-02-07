import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-provided',
  templateUrl: './services-provided.component.html',
  styleUrls: ['./services-provided.component.css']
})
export class ServicesProvidedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navgateToServiceProvidedCreate(): void {
    this.router.navigate(["/servicesProvided/create"]);
  }

}
