import { Component, OnInit } from '@angular/core';
declare var $: any;
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [SlickCarouselModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent {
  images = [
    'https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=',
    'https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=',
    'https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU=',
    'https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU='
    // Add more image paths here
  ];

  slideConfig = {
    slidesToShow: 3, // Number of images to show at once
    slidesToScroll: 1,
    dots: true,      // Show navigation dots
    infinite: true,  // Infinite loop
    autoplay: true,  // Autoplay the carousel
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    arrows: true,    // Show next/prev arrows
  };
}
