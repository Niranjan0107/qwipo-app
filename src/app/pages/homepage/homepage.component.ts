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
      image: "assets/market.png",
      longDescription: `Joining the Qwipo Marketplace grants SME suppliers, agri producers, and manufacturers unparalleled visibility, connecting them directly with a wider network of retailers actively seeking new products. This widespread market presence opens up new business opportunities, expands brand recognition, and drives growth by attracting a consistent stream of potential customers.`,
      shortDescription: `Joining the Qwipo Marketplace grants SME suppliers, agri producers, and manufacturers unparalleled visibility, connecting them directly..`,
      isExpanded: false
    },
    {
      title: "Payment Transparency and Security",
      image: "assets/payment.png",
      longDescription: `With Qwipo's transparent payment system, you can enjoy the peace of mind that comes from knowing exactly when and how you will be paid. The platform ensures clear, timely, and secure transactions, allowing businesses to manage their finances efficiently and focus on scaling rather than chasing payments.`,
      shortDescription: `With Qwipo's transparent payment system, you can enjoy the peace of mind that comes from knowing exactly when and how you will be..`,
      isExpanded: false
    },
    {
      title: "Seamless Logistics Solutions",
      image: "assets/logis.png",
      longDescription: `Experience the ease of comprehensive logistics services, either through our direct channels or partnered logistics providers on the platform. The platform facilitates smooth and efficient delivery processes, reducing the burden of shipment coordination and enabling you to focus on core business activities while ensuring your products reach their destinations reliably.`,
      shortDescription: `Experience the ease of comprehensive logistics services, either through our direct channels or partnered logistics providers on the platform.. `,
      isExpanded: false
    },
    {
      title: "Around-the-Clock Support",
      image: "assets/24-hours.png",
      longDescription: `Qwipo’s 24/7 Customer Support is always on hand to continuously assist and rapidly resolve any issues that you might face. This dedication ensures that your operations run smoothly and any challenges are addressed promptly, keeping your business moving forward without interruptions.`,
      shortDescription: `Qwipo’s 24/7 Customer Support is always on hand to continuously assist and rapidly resolve any issues that you might face. This dedication ensures..`,
      isExpanded: false
    },
    {
      title: "Efficient Business Management",
      image: "assets/business.png",
      longDescription: `Digitally streamlined operations allow traditional businesses to consolidate various processes under one unified platform. From inventory management to accounting to order tracking, the platform simplifies your day-to-day business activities, optimizing efficiency and reducing the administrative burden, thus saving you time and resources.`,
      shortDescription: `Digitally streamlined operations allow traditional businesses to consolidate various processes under one unified platform. From inventory..`,
      isExpanded: false
    },
    {
      title: "Flexible Financing Solutions",
      image: "assets/budgeting.png",
      longDescription: `Benefit from Qwipo’s network of credit and working capital financing partners to maintain an uninterrupted distribution system. These flexible financial solutions help suppliers manage cash flow effectively, ensuring they can meet demand without financial strain and continue operating smoothly even during peak demand periods.`,
      shortDescription: `Benefit from Qwipo’s network of credit and working capital financing partners to maintain an uninterrupted distribution system. These flexible..`,
      isExpanded: false
    },
    {
      title: `Integrated Mobile Applications`,
      image: "assets/mobile-app.png",
      longDescription: `Qwipo’s native web and mobile apps are optimized for vendors to streamline and grow their business, complemented by an integrated suite of smart mobile apps; for your sales agents to track orders and payments, delivery people to manage fulfillment, and for your customers—business retailers—to order their merchandise. These apps ensure that every facet of your business is always at your fingertips.`,
      shortDescription: `Qwipo’s native web and mobile apps are optimized for vendors to streamline and grow their business, complemented by an integrated..`,
      isExpanded: false
    }
  ];

  toggleReadMore(index: number): void {
    this.items[index].isExpanded = !this.items[index].isExpanded;
  }
}
