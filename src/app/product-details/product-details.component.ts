import { CommonModule,Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../catalogo.service';
import { CatalogoService } from '../catalogo.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private catalogoService: CatalogoService,
    private location: Location
  ) { }

  goBack(): void {
  this.location.back();
}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.catalogoService.getProduct(id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (error) => {
        console.error('Error fetching product details:', error);
      }
    });
  }
}
