import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { PricesComponent } from './prices/prices.component';


const routes: Routes = [
  { path: '', component: MainContentComponent},
  { path: 'feedbacks', component: FeedbacksComponent},
  { path: 'prices', component: PricesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
