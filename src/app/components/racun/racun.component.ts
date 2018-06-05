import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { RacunService } from '../../services/racun-service.service';
import { Racun } from '../../models/Racun';
import { HttpClient } from '@angular/common/http';
import { RacunDialogComponent } from '../dialogs/racun-dialog/racun-dialog.component'

@Component({
  selector: 'app-racun',
  templateUrl: './racun.component.html',
  styleUrls: ['./racun.component.css']
})
export class RacunComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'opis', 'tip_racuna', 'klijent'];
  exampleDatabase: RacunService;
  dataSource: MatTableDataSource<Racun>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient, public racunService: RacunService, public dialog: MatDialog) { }

  ngOnInit() {
      this.loadData();
  }

  public loadData() {

      this.racunService.getAllRacun().subscribe(data => {

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

  public openDialog(flag: number, id: number, naziv: string, oznaka: string, opis: string, tip_racuna: number, klijent: number) {

      const dialogRef = this.dialog.open(RacunDialogComponent, {
          data: { id: id, naziv: naziv,  oznaka: oznaka, opis: opis, tip_racuna: tip_racuna, klijent: klijent }
      });
      dialogRef.componentInstance.flag = flag;
      dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
              this.loadData();
          }
      });

  }

}
