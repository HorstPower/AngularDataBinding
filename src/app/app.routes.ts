import { Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgGridComponent } from './ng-grid/ng-grid.component';

export const routes: Routes = [

    {
        path: 'databinding', component: DataBindingComponent 
    },
    {
        path: 'directives',  component: DirectivesComponent
    },
    {
        path: 'angular-grid',  component: NgGridComponent
    },
    {
        path:'**', component: DirectivesComponent
    },
];
