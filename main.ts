import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MatPaginatorIntl} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {TableBasicExample} from './app/table-basic-example';
import {TablePaginatorExampleComponent} from './app/table-paginator-example/table-paginator-example.component';

import { PaginatorI18n} from './app/paginator-i18n.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents: [TableBasicExample, TablePaginatorExampleComponent],
  declarations: [TableBasicExample, TablePaginatorExampleComponent],
  bootstrap: [TablePaginatorExampleComponent],
  providers: [
    {
      provide: MatPaginatorIntl,
      useClass: PaginatorI18n,
      deps: []
    }
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */