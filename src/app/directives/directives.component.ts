import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormsModule } from '@angular/forms';

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
  color: string= '';

  colors: color[]= [
    {id: 0, color: 'red'},
    {id: 1, color: 'green'},
    {id: 2, color: 'blue'},
    {id: 3, color: 'white'},
    {id: 4, color: 'undefined'},
  ];

  switchColor(event: number) {
    this.color = this.colors[event].color;
  }


}
