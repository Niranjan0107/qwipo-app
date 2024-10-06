import { Component, TemplateRef, inject, HostListener, OnInit  } from '@angular/core';
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
export class HeaderComponent implements OnInit{
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



	// sticky header
	isSticky: boolean = false;
	isHidden: boolean = false;
	lastScrollTop = 0;
  
  
	ngOnInit(): void {}
  
	@HostListener('window:scroll', [])
	onWindowScroll() {
	  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
	  // Toggle sticky class based on scroll position
	  this.isSticky = scrollPosition >= 120;
  
	  // Detect if scrolling up or down
	  if (scrollPosition > this.lastScrollTop) {
		// Scrolling down
		this.isHidden = true; // Hide the header
	  } else {
		// Scrolling up
		this.isHidden = false; // Show the header
	  }
	  
	  // Update last scroll position
	  this.lastScrollTop = scrollPosition;
	}
}
