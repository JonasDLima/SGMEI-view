import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.url}/product/create`, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/product/list`);
  }

  readById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.url}/product/${id}`);
  }

  update(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.url}/product/${product.idProd}`, product);
  }

  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/product/${id}`);
  }
}
