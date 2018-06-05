import { Component, OnInit, Inject } from '@angular/core';
import { RacunService } from '../../../services/racun-service.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-racun-dialog',
  templateUrl: './racun-dialog.component.html',
  styleUrls: ['./racun-dialog.component.css']
})
export class RacunDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
      public dialogRef: MatDialogRef<RacunDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public racunService: RacunService) { }

  ngOnInit() {
  }

  public add(): void {
      this.data.id = -1;
      this.racunService.addRacun(this.data);
      this.snackBar.open('Uspešno dodat Racun: ' + this.data.naziv, 'U redu', { duration: 2500 });
  }

  public update(): void {
      this.racunService.updateRacun(this.data);
      this.snackBar.open('Uspešno modifikovan Racun: ' + this.data.id, 'U redu', { duration: 2500 });
  }

  public delete(): void {
      this.racunService.deleteRacun(this.data.id);
      this.snackBar.open('Uspešno obrisan Racun: ' + this.data.id, 'U redu', { duration: 2500 });
  }

  public cancel(): void {
      this.dialogRef.close();
      this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
  }

}
