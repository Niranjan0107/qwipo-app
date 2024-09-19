import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { UsersThoughtsComponent } from './pages/homepage/components/users-thoughts/users-thoughts.component';
import { BrandsComponent } from './pages/homepage/components/brands/brands.component';
import { MainSliderComponent } from './pages/homepage/components/main-slider/main-slider.component';
import { FooterComponent } from './otherComponents/footer/footer.component';
import { HeaderComponent } from './otherComponents/header/header.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FooterComponent, HeaderComponent, HeaderComponent, UsersThoughtsComponent, BrandsComponent, MainSliderComponent, AboutUsComponent, HomepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Qwipo';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      //console.log(event);
    });
  }
goToHome() {
  this.router.navigate(['/home']);
}



}
