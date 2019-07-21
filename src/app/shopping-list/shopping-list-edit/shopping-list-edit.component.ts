import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  
  //Init service
  constructor(private shopListService: ShoppingListService) { }



  ngOnInit() {
 
  }

  onAddItem(ev) {
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

       this.shopListService.addIngredient(newIngredient)

  }
}
