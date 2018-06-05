import { Component, OnInit, Inject } from '@angular/core';
import { KlijentService } from '../../../services/klijent-service.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-klijent-dialog',
  templateUrl: './klijent-dialog.component.html',
  styleUrls: ['./klijent-dialog.component.css']
})
export class KlijentDialogComponent implements OnInit {

  public flag: number;

  constructor(public snackBar: MatSnackBar,
      public dialogRef: MatDialogRef<KlijentDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      public klijentService: KlijentService) { }

  ngOnInit() {
  }

  public add(): void {
      this.data.id = -1;
      this.klijentService.addKlijent(this.data);
      this.snackBar.open('Uspešno dodat Klijent: ' + this.data.naziv, 'U redu', { duration: 2500 });
  }

  public update(): void {
      this.klijentService.updateKlijent(this.data);
      this.snackBar.open('Uspešno modifikovan Klijent: ' + this.data.id, 'U redu', { duration: 2500 });
  }

  public delete(): void {
      this.klijentService.deleteKlijent(this.data.id);
      this.snackBar.open('Uspešno obrisan Klijent: ' + this.data.id, 'U redu', { duration: 2500 });
  }

  public cancel(): void {
      this.dialogRef.close();
      this.snackBar.open('Odustali ste!', 'U redu', { duration: 1000 });
  }

}
