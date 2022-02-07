import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0,
    brand: ''
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(response => {
      this.productService.showMessage('Produto cadastrado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancela(): void {
    this.router.navigate(['/products']);
  }

}
