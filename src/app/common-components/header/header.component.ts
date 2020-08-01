import { Component, OnInit } from '@angular/core';
import { ShoppingDataService } from '../../service/shopping-data.service';
import { MatDialog} from '@angular/material/dialog';
import { CartItemsComponent } from '../../pages/cart-items/cart-items.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
	public shoppingDataService: ShoppingDataService,
    public dialog: MatDialog) {}

    added_item_list = [];
    item_count:number = 0;

	ngOnInit() {

		//get the list of added items from service because the number of added items 
		//has to be updated in badge of basket icon and the list has to be 
		//sent to cart component
		this.shoppingDataService.cart_item.subscribe(added_item_list => {
			this.added_item_list = added_item_list;
			if(this.added_item_list.length > 0)
				this.item_count = this.added_item_list[0].length;
		});
	}

	//send added items to CartItemsComponent to show in dialog
	show_cart_items(){
		const dialogRef = this.dialog.open(CartItemsComponent,
			{
				data: this.added_item_list,
				disableClose: true 
			}
		);

		dialogRef.afterClosed().subscribe(result => {
			if(result != undefined){
				if(this.item_count != result.length)
					this.item_count = result.length;
			}
		});
	}
}
