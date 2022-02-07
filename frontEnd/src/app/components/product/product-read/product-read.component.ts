import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['idProd', 'name', 'price', 'brand', 'action'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(response => {
      this.products = response;
      console.log(response)
    })
  }

}
