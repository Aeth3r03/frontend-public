import { Component, Input } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-button',
  imports: [ɵEmptyOutletComponent],
  templateUrl: './button.html'
})
export class Button {
  @Input() variant: 'primary' | 'secondary' = 'primary'
}
