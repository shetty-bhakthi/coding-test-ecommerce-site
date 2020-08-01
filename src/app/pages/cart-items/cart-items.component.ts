import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShoppingDataService } from '../../service/shopping-data.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
	total_amount:number = 0;
	quantity : number = 1;
	error_flag : boolean = false;

	constructor(@Inject(MAT_DIALOG_DATA) public cart_data,
		public dialogRef: MatDialogRef<CartItemsComponent>,
		public shoppingDataService: ShoppingDataService
	) {}

	ngOnInit() {
		//get the added item list sent from header component 
		this.cart_data = this.cart_data[0];

		//find out the subtotal
		if(this.cart_data != undefined && this.cart_data.length > 0){
			for(let item_count = 0;item_count < this.cart_data.length; item_count++){
				this.total_amount =this.total_amount + parseInt(this.cart_data[item_count].price);
			}
		}	
	}

	//if user adds quantity (default 1), then we have to re-calculate the subtotal based on the 
	//quantity added.
	add_quantity(quantity, added_item) {
		this.error_flag = false;
		quantity = quantity.trim();

		//check for wrong input like not a number, whitespace or zero
		if(parseInt(quantity)== 0 || isNaN(quantity) || quantity == ""){
			this.error_flag = true;
			return false;
		} else {

			//re-calculate the subtotal
			this.total_amount = 0;
			if(this.cart_data != undefined && this.cart_data.length > 0){
				for(let item_count = 0;item_count < this.cart_data.length; item_count++){
					this.total_amount =this.total_amount + (parseInt(added_item.price)*parseInt(quantity));
				}
			}	
			return true;
		}
	}

	//remve added item if user click "Remove" button 
	//this works based on the index of item 
	remove_from_cart(removed_item,index){
		this.total_amount =this.total_amount - (parseInt(removed_item.price)*this.quantity);
		this.cart_data.splice(index,1);
	}

	//once dialog is closed share the data to the service again
	//because if the user removes the added item in cart page, the same item has 
	//to be enabled in shopping list page
	close_dialog() {
		this.shoppingDataService.added_items(this.cart_data);
		this.dialogRef.close(this.cart_data);
	}
}
