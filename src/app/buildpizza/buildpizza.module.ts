import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuildpizzaComponent } from './buildpizza.component';

export const routes: Routes = [
  {
    path: '',
    component: BuildpizzaComponent,
  },
];

@NgModule({
  declarations: [BuildpizzaComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BuildpizzaModule {
  
}
