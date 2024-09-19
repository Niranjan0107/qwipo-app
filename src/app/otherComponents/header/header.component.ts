import { Component, TemplateRef, inject } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasConfig, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [NgbOffcanvasConfig, NgbOffcanvas],

})
export class HeaderComponent {
  constructor(
		config: NgbOffcanvasConfig,
		private offcanvasService: NgbOffcanvas,
	) {
		// customize default values of offcanvas used by this component tree
		config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
	}

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content);
	}

	openSidebar(contentSidebar: TemplateRef<any>) {
		this.offcanvasService.open(contentSidebar);
	}
}
