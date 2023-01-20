import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';




export interface PeriodicElement {
  Hotel: string;
  Arrival: Date;
  Departure: Date;
  Type: string;
  Guest:Int32Array;
  price:Int32Array;
}

const ELEMENT_DATA: PeriodicElement[] =[ 
];
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  constructor(public openDialogs:MatDialog) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['Hotel', 'Arrival', 'Departure', 'Type','Guest','price','Manage'];
  dataSource =ELEMENT_DATA;
  
  // @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

onClick(){
  this.openDialogs.open( DialogComponent, {

        height:"50%",
         width:"50%",
      })
}
}


