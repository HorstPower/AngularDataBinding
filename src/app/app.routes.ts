import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';

export const routes: Routes = [
    {
        path: 'databinding', component: DataBindingComponent 
    },
    {
        path: 'directives',  component: DirectivesComponent
    }
];
