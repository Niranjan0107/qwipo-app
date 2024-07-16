import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UsersThoughtsComponent } from './pages/homepage/components/users-thoughts/users-thoughts.component';
import { MediaShowcaseComponent } from './pages/homepage/components/media-showcase/media-showcase.component';
import { BrandsComponent } from './pages/homepage/components/brands/brands.component';
import { MainSliderComponent } from './pages/homepage/components/main-slider/main-slider.component';
import { FooterComponent } from './otherComponents/footer/footer.component';
import { HeaderComponent } from './otherComponents/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, HeaderComponent, UsersThoughtsComponent, MediaShowcaseComponent, BrandsComponent, MainSliderComponent, AboutUsComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qwipo';
}
