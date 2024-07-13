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

}
