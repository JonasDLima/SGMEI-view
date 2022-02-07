import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { HeaderComponent } from './wrappers/header/header.component';
import { FooterComponent } from './wrappers/footer/footer.component';
import { NavBarComponent } from './wrappers/nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductReadComponent } from './product/product-read/product-read.component';
import { ProductTableExempleComponent } from './product/product-table-exemple/product-table-exemple.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ServicesProvidedCreateComponent } from './services-provided/services-provided-create/services-provided-create.component';
import { ServicesProvidedUpdateComponent } from './services-provided/services-provided-update/services-provided-update.component';
import { ServicesProvidedDeleteComponent } from './services-provided/services-provided-delete/services-provided-delete.component';
import { ServicesProvidedReadComponent } from './services-provided/services-provided-read/services-provided-read.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ProductCreateComponent,
    ProductReadComponent,
    ProductTableExempleComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ServicesProvidedCreateComponent,
    ServicesProvidedUpdateComponent,
    ServicesProvidedDeleteComponent,
    ServicesProvidedReadComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ProductReadComponent,
    ServicesProvidedReadComponent
  ]
})
export class ComponentsModule { }
