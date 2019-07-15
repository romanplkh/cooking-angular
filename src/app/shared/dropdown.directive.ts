import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Hostbinding needs to know to what attribute, element, class etc we will bind the value. SO if we need to add class 'open' to element in params of @HostBinding we will write 'class.open' which will depend on isOpen property
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
