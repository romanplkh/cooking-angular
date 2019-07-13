import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  constructor() { }

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  ngOnInit() {}

  onAddItem(ev) {
    console.log(ev)
    ev.preventDefault();

    const {
      nameInputRef: {
        nativeElement: { value: NameValue }
      },
      amountInputRef: {
        nativeElement: { value: AmountValue }
      }
    } = this;

    const newIngredient = new Ingredient(NameValue, AmountValue);
    this.ingredientAdded.emit(newIngredient);
  }
}
