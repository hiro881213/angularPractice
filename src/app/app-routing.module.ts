import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTopBarComponent } from './topbar/topbar.component';
import { ProductListComponent } from './product-list/productList.component';

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'topbar', component: AppTopBarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
