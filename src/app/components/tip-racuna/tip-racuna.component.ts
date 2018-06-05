import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { TipRacunaService } from '../../services/tip-racuna-service.service';
import { TipRacuna } from '../../models/tip-racuna';
import { HttpClient } from '@angular/common/http';
import { TipRacunaDialogComponent } from '../dialogs/tip-racuna-dialog/tip-racuna-dialog.component'

@Component({
  selector: 'app-tip-racuna',
  templateUrl: './tip-racuna.component.html',
  styleUrls: ['./tip-racuna.component.css']
})
export class TipRacunaComponent implements OnInit {

  displayedColumns = ['id', 'naziv', 'oznaka', 'opis'];
  exampleDatabase: TipRacunaService;
  dataSource: MatTableDataSource<TipRacuna>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient, public tipRacunaService: TipRacunaService, public dialog: MatDialog) { }

  ngOnInit() {
      this.loadData();
  }

  public loadData() {

      this.tipRacunaService.getAllTipRacuna().subscribe(data => {

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

      const dialogRef = this.dialog.open(TipRacunaDialogComponent, {
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
