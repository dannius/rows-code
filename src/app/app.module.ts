import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MileageCardContainer, MileageEstimateFormContainer } from './containers';
import { ProductComponent } from './components';

const CONTAINERS = [
  MileageCardContainer,
  MileageEstimateFormContainer,
];

const COMPONENTS = [
  ProductComponent,
];


@NgModule({
  declarations: [
    AppComponent,

    CONTAINERS,
    COMPONENTS,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
