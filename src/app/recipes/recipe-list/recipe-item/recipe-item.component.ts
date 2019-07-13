import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {} from 'protractor';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
 @Output() selectedRecipe = new EventEmitter<void>();
 @Input() recipe: Recipe;

  constructor() {}

  onSelectedItem() {
    this.selectedRecipe.emit();
  }

  ngOnInit() {}
}
