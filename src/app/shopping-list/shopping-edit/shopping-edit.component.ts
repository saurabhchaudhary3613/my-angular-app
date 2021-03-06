import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // @Output() ingredientAddedd = new EventEmitter<{name: string, amount: number}>();
  @Output() ingredientAdded = new EventEmitter<{Ingredient}>();

  ngOnInit() {

  }

  onAddItem() {
    const ingName: string = this.nameInputRef.nativeElement.value;
    const ingAmount: number = this.amountInputRef.nativeElement.value;
    const newIngredient: any = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
