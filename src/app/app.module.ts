import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { FilterSearchComponent } from './filter-search/filter-search.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrimeNumberComponent,
    FilterSearchComponent,
    NodejsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'prime-number', component: PrimeNumberComponent},
      {path: 'filter-search', component: FilterSearchComponent},
      {path: 'nodejs', component: NodejsComponent},
      {path: '', component: PrimeNumberComponent},
      {path: '**', redirectTo: 'prime-number', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
