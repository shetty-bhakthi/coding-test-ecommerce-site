// this module has all required angular material imported
//so that we can directly can this module whereever required 
//instead of importing in each module repeatedly 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatBadgeModule,
		MatDialogModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule
    ],
  exports:[
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatBadgeModule,
		MatDialogModule,
		MatInputModule,
		MatFormFieldModule,
		FormsModule
	]
})
export class AngularMaterialModule { }
