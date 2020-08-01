import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import material module
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { PagesRoutingModule } from './pages-routing.module';

//import custom components
import { ShoppingItemsComponent } from '../pages/shopping-items/shopping-items.component';
import { CartItemsComponent } from '../pages/cart-items/cart-items.component';

@NgModule({
	declarations: [
		ShoppingItemsComponent,
		CartItemsComponent
	],
	imports: [
		CommonModule,
		PagesRoutingModule,
		AngularMaterialModule
	],
	exports:[ShoppingItemsComponent],
	entryComponents:[CartItemsComponent]
})
export class PagesModule { }
