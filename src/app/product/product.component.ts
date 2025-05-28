import { Component, OnInit } from '@angular/core';
import { CatalogoService, Product } from '../catalogo.service';
import { CommonModule } from '@angular/common';
import{  HttpClientModule } from '@angular/common/http'; 
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(private catalogoService:CatalogoService) { }

  ngOnInit() {
    console.log(this.products);
    this.catalogoService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
    
  }

}
