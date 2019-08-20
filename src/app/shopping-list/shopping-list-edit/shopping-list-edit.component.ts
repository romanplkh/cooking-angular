import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  mySubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  @ViewChild('formShop', { static: false }) formTemplate: NgForm;


  // Init service
  constructor(private shopListService: ShoppingListService) { }



  ngOnInit() {
   this.mySubscription = this.shopListService.ingredientEditing.subscribe({
     next: value => {
       this.editMode = true;
       this.editedItemIndex = value;
       this.editedItem = this.shopListService.getIngredient(value);
       this.formTemplate.setValue({
         name: this.editedItem.name,
         amount: this.editedItem.amount
       });
      }
    });
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const {name, amount} = form.value;
    const newIngredient = new Ingredient(name, amount);

    if (this.editMode) {
      this.shopListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shopListService.addIngredient(newIngredient);
    }

    this.editMode = false;
    this.formTemplate.reset()
  }

  onDelete() {
    this.shopListService.deleteIngredient(this.editedItemIndex);
    this.onCLear();
  }

  onCLear() {
    this.formTemplate.reset();
    this.editMode = false;
  }
}
