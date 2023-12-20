import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialsModule } from '../shared/materials/materials.module';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
  ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent	{

  FormModule: any = new FormsModule();
  
  
  // String interpolation
  theNumber: string = '0';
  theString: string = `${this.theNumber} x Hello World`;

  // Property binding
  hideButton: boolean = false;

  // ngModel
  InputString: string = '';
  
  
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
