import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingDataService {
	cart_items_list = [];
	cart_item: BehaviorSubject<any>;
	
	constructor(private httpClient: HttpClient) {
		this.cart_item  = new BehaviorSubject(this.cart_items_list);
	}

	get_all_shopping_items(){
		return this.httpClient.get(`https://www.mocky.io/v2/5eda4003330000740079ea60`);
	}

	added_items(item){
		this.cart_items_list = [];
		if( item != undefined && item.length > 0){
			this.cart_items_list.push(item);
		}
		this.cart_item.next(this.cart_items_list);
	}
}
