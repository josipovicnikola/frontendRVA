import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { KreditService } from '../../services/kredit-service.service';
import { Kredit } from '../../models/Kredit';
import { HttpClient } from '@angular/common/http';
import { KreditDialogComponent } from '../dialogs/kredit-dialog/kredit-dialog.component'

@Component({
  selector: 'app-kredit',
  templateUrl: './kredit.component.html',
  styleUrls: ['./kredit.component.css']
})
export class KreditComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'opis'];
  exampleDatabase: KreditService;
  dataSource: MatTableDataSource<Kredit>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient, public kreditService: KreditService, public dialog: MatDialog) { }

  ngOnInit() {
      this.loadData();
  }

  public loadData() {

      this.kreditService.getAllKredit().subscribe(data => {

          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;

          this.dataSource.sortingDataAccessor = (dataForSort, property) => {
              switch (property) {
                  case 'id': return dataForSort[property];
                  default: return dataForSort[property].toLocalLowerCase();
              }
          };

          this.dataSource.sort = this.sort;
          console.log(this.dataSource);
      });
  }

  applyFilter(filterValue: string) {
      filterValue = filterValue.trim();
      filterValue = filterValue.toLowerCase();
      this.dataSource.filter = filterValue;
  }

  public openDialog(flag: number, id: number, naziv: string, oznaka: string, opis: string) {

      const dialogRef = this.dialog.open(KreditDialogComponent, {
          data: { id: id, naziv: naziv,  oznaka: oznaka, opis: opis }
      });
      dialogRef.componentInstance.flag = flag;
      dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
              this.loadData();
          }
      });

  }

}
