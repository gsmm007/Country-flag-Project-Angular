import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryFlagComponent } from './country-flag/country-flag.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';

const routes: Routes = [
  { path: '', component: CountryFlagComponent },
  { path: 'country/:cc', component: CountryDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
