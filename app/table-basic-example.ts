import {Component} from '@angular/core';
import {people as People} from './people';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['index', 'picture', 'firstname', 'age', 'email'];
  dataSource = People;

  colors = ['6907e8', 'ff00ff', '00ff00', 'ff0000', '0000ff'];
  len = this.colors.length;

}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */