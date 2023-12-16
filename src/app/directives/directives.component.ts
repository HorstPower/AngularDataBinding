import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialsModule } from '../shared/materials/materials.module';

interface item {
  id: number;
  name: string;
}

interface color {
  id: number;
  color: string;
}

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {

  // Structural directives
  // If/Else
  ifBoolean: boolean = true;


  toggelIfBoolean() {
    this.ifBoolean = !this.ifBoolean;
  }

  // For
  items: item[]= [];
  index: number= 0;
  hideForButton: boolean= true;
  formmodule: any = new FormsModule();
  inputName: string= '';


  add() {
    this.items.push({id: this.index, name: this.inputName});
    this.index++ 
    this.hideForButton = false;
  }

  delete () {
    if (this.index > 0) {
      this.items.pop();
      this.index--
      if(this.index == 0) {
        this.hideForButton = true;
      }
    }
  }

  // Switch
  colors: color[]= [
    {id: 1, color: 'red'},
    {id: 2, color: 'green'},
    {id: 3, color: 'blue'},
    {id: 4, color: 'undefined'},
  ];
  color: string = 


  // Property binding
  hideButton: boolean = false;

  // ngModel
  InputString: string = '';
  

  constructor() {
  }

  // String interpolation
  changeString() {
  }

  // Property binding
  togglehide() {
    this.hideButton = !this.hideButton;


    if (this.ifBoolean) {
      this.ifBoolean = false;
    } else {
      this.ifBoolean = true;
    }
    
  }


}
