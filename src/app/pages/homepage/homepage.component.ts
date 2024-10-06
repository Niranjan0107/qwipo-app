import { Component } from '@angular/core';
import { FooterComponent } from '../../otherComponents/footer/footer.component';
import { UsersThoughtsComponent } from './components/users-thoughts/users-thoughts.component';
import { BrandsComponent } from './components/brands/brands.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CommonModule } from '@angular/common'; 
import { title } from 'process';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FooterComponent, CommonModule, UsersThoughtsComponent, BrandsComponent, MainSliderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  items = [
    {
      title: "Enhanced Market Presence",
      image: "assets/f1.png",
      longDescription: `Gain visibility and connect directly with retailers, expanding brand recognition and driving growth.`,
    },
    {
      title: "Payment Transparency & Security",
      image: "assets/f2.png",
      longDescription: `Enjoy clear, timely, and secure transactions, enabling better financial management.`,
    },
    {
      title: "Seamless Logistics Solutions",
      image: "assets/f3.png",
      longDescription: `Rely on efficient logistics services for hassle-free delivery, reducing shipment coordination efforts.`,
  
    },
    {
      title: "Around-the-Clock Support",
      image: "assets/f4.png",
      longDescription: `24/7 customer support ensures smooth operations and prompt issue resolution.`,

    },
    {
      title: "Efficient Business Management",
      image: "assets/f5.png",
      longDescription: `Streamline operations through a unified inventory, accounting, and order tracking platform.`,

    },
    {
      title: "Flexible Financing Solutions",
      image: "assets/f6.png",
      longDescription: `Access credit and financing partners to manage cash flow and meet demand effortlessly.`,

    },
    // {
    //   title: `Integrated Mobile Applications`,
    //   image: "assets/mobile-app.png",
    //   longDescription: `Qwipo’s native web and mobile apps are optimized for vendors to streamline and grow their business, complemented by an integrated suite of smart mobile apps; for your sales agents to track orders and payments, delivery people to manage fulfillment, and for your customers—business retailers—to order their merchandise. These apps ensure that every facet of your business is always at your fingertips.`,
    //   shortDescription: `Qwipo’s native web and mobile apps are optimized for vendors to streamline and grow their business, complemented by an integrated..`,
    //   isExpanded: false
    // },
    {
      title: `Integrated Mobile Apps`,
      image: "assets/f7.png",
      longDescription: `Optimize operations with mobile apps for sales tracking, fulfillment management, and customer orders.`,

    }
  ];

  // toggleReadMore(index: number): void {
  //   this.items[index].isExpanded = !this.items[index].isExpanded;
  // }
}
