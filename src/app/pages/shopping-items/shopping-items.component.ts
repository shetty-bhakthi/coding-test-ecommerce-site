import { Component, OnInit , Output, EventEmitter} from '@angular/core';

//importing service 
import { ShoppingDataService } from '../../service/shopping-data.service';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.scss']
})
export class ShoppingItemsComponent implements OnInit {

	shopping_items : object;
	added_items_list = [];
	@Output() item_added = new EventEmitter();

	constructor( public shoppingDataService: ShoppingDataService) { }

	ngOnInit() {
		//get the shared data from service
		this.shoppingDataService.cart_item.subscribe(added_item_list => {
			if(this.shopping_items != undefined){
				this.add_disabled_field(added_item_list)
			}
		 });

		//get the data from API
		this.shoppingDataService.get_all_shopping_items().subscribe((data:object)=>{
			data["data"].forEach( element=> element["disabled"] = false);
			this.shopping_items = data["data"];
		});
	}

	//once the added item is removed in cart page , 
	//then the same item has to be enabled in shopping list page
	//this function makes "disabled = false" in all object 
	//then makes "disabled = true" of the ones that are in cart list
	add_disabled_field(added_item_list){
		let data = [];
		data["data"] = this.shopping_items;
		data["data"].forEach(element => element.disabled = false);

		if(added_item_list.length != 0){
			
			//disable the "add to cart" button once clicked
			for(let index= 0; index < added_item_list[0].length ; index++){
				added_item_list[0][index].disabled = true;
			}
		} 		
	}

	//add user selected items to cart
	add_to_cart(added_item){
		this.added_items_list.push(added_item);

		//share the added item to service so that the same
		// can be accessed from other component
		this.shoppingDataService.added_items(this.added_items_list);

		//disable the "add to cart" button once clicked
		added_item.disabled = true;
	}
}
