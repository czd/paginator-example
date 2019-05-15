import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {people, Person} from './people';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['index', 'firstname', 'lastname', 'age', 'email'];
  dataSource = new MatTableDataSource<Person>(people);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */