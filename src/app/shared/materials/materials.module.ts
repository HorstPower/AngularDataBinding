import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatListModule} from '@angular/material/list'; 
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class MaterialsModule { }
