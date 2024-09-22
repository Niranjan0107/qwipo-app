import { Component } from '@angular/core';
import { SidebarComponent } from '../../otherComponents/sidebar/sidebar.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

}
