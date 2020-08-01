import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingItemsComponent } from '../pages/shopping-items/shopping-items.component';

//defining route to load ShoppingItemsComponent when module loads
const routes: Routes = [
	{
		path:'',
		component:ShoppingItemsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
