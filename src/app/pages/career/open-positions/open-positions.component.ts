import { Component, inject, TemplateRef } from '@angular/core';
import { NgbCarouselModule, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-open-positions',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './open-positions.component.html',
  styleUrl: './open-positions.component.css'
})
export class OpenPositionsComponent {
  private modalService = inject(NgbModal);
	closeResult = '';

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true, windowClass: 'services-dialog' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}
}
