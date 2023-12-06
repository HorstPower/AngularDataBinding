import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

import { MaterialsModule } from './shared/materials/materials.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
     RouterOutlet,
     MatSidenavModule,
     MaterialsModule,
     RouterModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Basics';

  library: string[] = ['databinding', 'directives', 'next..'];
}
