import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

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

  updateProduct(): void {
    this.productService.update(this.product).subscribe(response => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(['/products']);
    })
  }

  cancela(): void {
    this.router.navigate(['/products']);
  }

}
