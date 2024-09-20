import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
declare var $: any;
declare var Swiper: any;

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add schemas here

})
export class BrandsComponent {
  ngOnInit(): void {
   
  }
}
