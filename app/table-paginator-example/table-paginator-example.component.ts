import { Component, ViewChild, ElementRef } from '@angular/core';
import { people as People, Person } from '../people';
import { PageEvent, MatPaginator, MatTableDataSource } from '@angular/material';
import { fromEvent } from 'rxjs';

function filterFunc(person: Person, value: string) {
  if(!value){
    return true;
  }

  const searchTerm = value.toLocaleLowerCase();

  const { company, age, firstname, lastname, email } = person;
  return company.toLocaleLowerCase().includes(searchTerm) ||
    age.toString().includes(searchTerm) || 
    firstname.toLocaleLowerCase().includes(searchTerm) || 
    lastname.toLocaleLowerCase().includes(searchTerm) || 
    email.toLocaleLowerCase().includes(searchTerm);
}

@Component({
  selector: 'app-table-paginator-example',
  templateUrl: './table-paginator-example.component.html',
  styleUrls: ['./table-paginator-example.component.css']
})
export class TablePaginatorExampleComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('textCtrl') textCtrl: ElementRef;

  displayedColumns: string[] = ['index', 'firstname', 'lastname', 'age', 'email'];
  dataSource = new MatTableDataSource<Person>(People);

  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = filterFunc;

    console.log(this.textCtrl);

    fromEvent(this.textCtrl.nativeElement, 'keyup').subscribe((event: KeyboardEvent) => {
      this.dataSource.filter = event.target.value;
    })
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

}