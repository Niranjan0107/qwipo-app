import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [NgbCarouselModule ],
  templateUrl: './main-slider.component.html',
  styleUrl: './main-slider.component.css'
})
export class MainSliderComponent {
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);



  shortDescription: string = `Welcome to India’s leading online B2B marketplace that connects 
  top-tier manufacturers, small- and medium-sized enterprises, and micro-businesses with 
  thousands of local business retailers and Kirana stores across the country.`;

// Full description to show on clicking "Read More"
fullDescription: string = `Welcome to India’s leading online B2B marketplace that connects 
  top-tier manufacturers, small- and medium-sized enterprises, and micro-businesses with 
  thousands of local business retailers and Kirana stores across the country.
  A completely product-agnostic marketplace that serves a wide array of product verticals including 
  Food & Grocery, Auto Parts, Lifestyle, Apparel, and more, Qwipo doesn’t just showcase your products 
  to the right buyers. It also allows you to leverage efficient end-to-end logistics, secure payments, 
  cost-effective credit, complete price transparency, and everything else that you need to grow your sales. 
  Join the all-in-one indigenous trading marketplace and let the power of technology propel your business forward.`;

// Toggle between the short and full description
isExpanded: boolean = false;

// Function to toggle the description view
toggleReadMore() {
  this.isExpanded = !this.isExpanded;
}

}
