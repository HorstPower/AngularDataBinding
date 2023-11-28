import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

import { MaterialsModule } from '../shared/materials/materials.module';


@Component({
  selector: 'app-data-bindung',
  standalone: true,
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
  ],
  templateUrl: './data-bindung.component.html',
  styleUrl: './data-bindung.component.scss'
})
export class DataBindungComponent	{

  FormModule: any = new FormsModule();
  

  // String interpolation
  theNumber: string = '0';
  theString: string = `${this.theNumber} x Hello World`;

  // Property binding
  hideButton: boolean = false;

  // ngModel
  InputString: string = '';
  

  constructor() {
    console.log(this.FormModule);
  }

  // String interpolation
  changeString() {
    let tempNumber: number = parseInt(this.theNumber);
    tempNumber++;
    this.theNumber = tempNumber.toString();
    this.theString = `${this.theNumber} x Hello World`;
  }

  // Property binding
  togglehide() {
    this.hideButton = !this.hideButton;
  }

}
