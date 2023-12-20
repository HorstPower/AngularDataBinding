import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsModule } from '../shared/materials/materials.module';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-ng-grid',
  standalone: true,
  imports: [
    CommonModule,
    MaterialsModule,
  ],
  templateUrl: './ng-grid.component.html',
  styleUrl: './ng-grid.component.scss'
})
export class NgGridComponent {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'five', cols: 1, rows: 2, color: 'darkblue'},
    {text: 'Six', cols: 1, rows: 1, color: 'darkred'},
    {text: 'Seven', cols: 2, rows: 1, color: 'darkgreen'},
    {text: 'Eight', cols: 3, rows: 1, color: 'Gray'},
  ];
}
