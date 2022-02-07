import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0,
    brand: ''
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idProd: any = this.route.snapshot.paramMap.get('id');
    this.productService.readById(idProd).subscribe(response => {
      this.product = response;
    })
  }

  deleteProduct(): void {
    const idProd: any = this.route.snapshot.paramMap.get('id');
    this.productService.delete(idProd).subscribe(response => {
      this.productService.showMessage('Produto removido com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancela(): void {
    this.router.navigate(['/products']);
  }

}
