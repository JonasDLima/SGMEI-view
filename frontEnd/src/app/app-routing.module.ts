import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth.guard';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ServicesProvidedCreateComponent } from './components/services-provided/services-provided-create/services-provided-create.component';
import { ServicesProvidedDeleteComponent } from './components/services-provided/services-provided-delete/services-provided-delete.component';
import { ServicesProvidedUpdateComponent } from './components/services-provided/services-provided-update/services-provided-update.component';
import { HomeContentComponent } from './views/home-content/home-content.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProductComponent } from './views/product/product.component';
import { ServicesProvidedComponent } from './views/services-provided/services-provided.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'homeContent', component: HomeContentComponent },
      { path: 'products', component: ProductComponent },
      { path: 'products/create', component: ProductCreateComponent },
      { path: 'products/update/:id', component: ProductUpdateComponent },
      { path: 'products/delete/:id', component: ProductDeleteComponent },
      { path: 'servicesProvided', component: ServicesProvidedComponent },
      { path: 'servicesProvided/create', component: ServicesProvidedCreateComponent },
      { path: 'servicesProvided/update/:id', component: ServicesProvidedUpdateComponent },
      { path: 'servicesProvided/delete/:id', component: ServicesProvidedDeleteComponent },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
