import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTopBarComponent } from './topbar/topbar.component';

const routes: Routes = [
  { path: 'topbar', component: AppTopBarComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
