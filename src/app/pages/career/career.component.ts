import { Component } from '@angular/core';
import { OpenPositionsComponent } from './open-positions/open-positions.component';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [OpenPositionsComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {

}
