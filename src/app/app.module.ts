import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MileageCardContainer, MileageEstimateFormContainer } from './containers';
import { ProductComponent } from './components';
import { ClosestProductsPipe } from './pipes';

const CONTAINERS = [
  MileageCardContainer,
  MileageEstimateFormContainer,
];

const COMPONENTS = [
  ProductComponent,
];

const PIPES = [
  ClosestProductsPipe,
];


@NgModule({
  declarations: [
    AppComponent,

    CONTAINERS,
    COMPONENTS,
    PIPES,
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
