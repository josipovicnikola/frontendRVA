import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { KlijentService } from '../../services/klijent-service.service';
import { Klijent } from '../../models/Klijent';
import { HttpClient } from '@angular/common/http';
import { KlijentDialogComponent } from '../dialogs/klijent-dialog/klijent-dialog.component'

@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css']
})
export class KlijentComponent implements OnInit {

  displayedColumns = ['id', 'ime', 'prezime', 'broj_lk', 'kredit'];
  exampleDatabase: KlijentService;
  dataSource: MatTableDataSource<Klijent>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public httpClient: HttpClient, public klijentService: KlijentService, public dialog: MatDialog) { }

  ngOnInit() {
      this.loadData();
  }

  public loadData() {

      this.klijentService.getAllKlijent().subscribe(data => {

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

  public openDialog(flag: number, id: number, ime: string, prezime: string, broj_lk: number, kredit: number) {

      const dialogRef = this.dialog.open(KlijentDialogComponent, {
          data: { id: id, ime: ime,  prezime: prezime, broj_lk: broj_lk, kredit: kredit }
      });
      dialogRef.componentInstance.flag = flag;
      dialogRef.afterClosed().subscribe(result => {
          if (result === 1) {
              this.loadData();
          }
      });

  }

}
