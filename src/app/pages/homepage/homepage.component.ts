import { Component } from '@angular/core';
import { FooterComponent } from '../../otherComponents/footer/footer.component';
import { MediaShowcaseComponent } from './components/media-showcase/media-showcase.component';
import { UsersThoughtsComponent } from './components/users-thoughts/users-thoughts.component';
import { BrandsComponent } from './components/brands/brands.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FooterComponent, MediaShowcaseComponent, UsersThoughtsComponent, BrandsComponent, MainSliderComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
