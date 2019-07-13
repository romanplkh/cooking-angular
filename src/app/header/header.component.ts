import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent implements OnInit {
  constructor() {}

  //We create our custom event here. Event emitter - is generic. 
  //! 2) This custom event will be called by onSelect()
  //! In parent component and will get eventHandler => method it shoudl execute when featureSelected called
  @Output() featureSelected = new EventEmitter<string>();

  ngOnInit(): void {}


  //We call event emitter here, because we cannont call event outside of class
  //!  1) This event will be called when we press button on UI
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
