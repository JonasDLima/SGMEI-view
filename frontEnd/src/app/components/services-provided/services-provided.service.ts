import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ServicesProvided } from '../models/services-provided';

@Injectable({
  providedIn: 'root'
})
export class ServicesProvidedService {

  url = "http://localhost:8080";

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient,
    ) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(serviceProvided: ServicesProvided): Observable<ServicesProvided> {
    return this.http.post<ServicesProvided>(`${this.url}/serviceProvided/create`, serviceProvided);
  }

  read(): Observable<ServicesProvided[]> {
    return this.http.get<ServicesProvided[]>(`${this.url}/serviceProvided/listServicesProvided`);
  }

  readById(id: string): Observable<ServicesProvided> {
    return this.http.get<ServicesProvided>(`${this.url}/serviceProvided/${id}`);
  }

  update(serviceProvided: ServicesProvided): Observable<ServicesProvided>{
    return this.http.put<ServicesProvided>(`${this.url}/serviceProvided/${serviceProvided.idServices}`, serviceProvided);
  }

  delete(id: string): Observable<ServicesProvided> {
    return this.http.delete<ServicesProvided>(`${this.url}/serviceProvided/${id}`);
  }

  reader(): Observable<ServicesProvided[]> {
    return this.http.get<ServicesProvided[]>(`${this.url}/serviceProvided/listServicesProvided`);
  }
}
