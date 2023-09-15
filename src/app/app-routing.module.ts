import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PizzalistComponent } from './pizzalist/pizzalist.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  {
    path: 'buildurpizza',
    loadChildren: () =>
      import('./buildpizza/buildpizza.module').then((s) => s.BuildpizzaModule),
  },
  { path: 'orderpizza', component: PizzalistComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
