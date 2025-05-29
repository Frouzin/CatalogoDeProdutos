import { Component, OnInit } from '@angular/core';
import { CatalogoService, Product } from '../catalogo.service';
import { CommonModule } from '@angular/common';
import{  HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  loading: boolean = true;

  constructor(private catalogoService:CatalogoService) { }

  ngOnInit() {
    this
    this.catalogoService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.loading = false;
      }
    });
    
  }

}
