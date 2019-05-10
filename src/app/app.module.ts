import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { CreditFormComponent } from './credit-form/credit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VisibilityDirective } from './Credit-form/visibility.directive';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    CreditFormComponent,
    VisibilityDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
