import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatExpansionModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatSelectModule,
  MatOptionModule,
  MatSnackBarModule,
  MatDialogModule,
  MatInputModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatNativeDateModule,
  MatPaginatorModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { KreditComponent } from './components/kredit/kredit.component';
import { KlijentComponent } from './components/klijent/klijent.component';
import { RacunComponent } from './components/racun/racun.component';
import { TipRacunaComponent } from './components/tip-racuna/tip-racuna.component';
import { FormsModule } from '@angular/forms';
import { KreditService } from './services/kredit-service.service';
import { KlijentService } from './services/klijent-service.service';
import { TipRacunaService } from './services/tip-racuna-service.service';
import { RacunService } from './services/racun-service.service';
import { KreditDialogComponent } from './components/dialogs/kredit-dialog/kredit-dialog.component';
import { KlijentDialogComponent } from './components/dialogs/klijent-dialog/klijent-dialog.component';
import { RacunDialogComponent } from './components/dialogs/racun-dialog/racun-dialog.component';
import { TipRacunaDialogComponent } from './components/dialogs/tip-racuna-dialog/tip-racuna-dialog.component';
import { HomeComponent } from './components/core/home/home.component';
import { AuthorComponent } from './components/core/author/author.component';
import { AboutComponent } from './components/core/about/about.component';

const Routes = [
  { path: 'kredit', component: KreditComponent},
  { path: 'klijent', component: KlijentComponent},
  { path: 'racun', component: RacunComponent},
  { path: 'tipRacuna', component: TipRacunaComponent},
  { path: 'about', component: AboutComponent},
  { path: 'home', component: HomeComponent},
  { path: 'author', component: AuthorComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    KreditComponent,
    KlijentComponent,
    RacunComponent,
    TipRacunaComponent,
    KreditDialogComponent,
    KlijentDialogComponent,
    RacunDialogComponent,
    TipRacunaDialogComponent,
    HomeComponent,
    AuthorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
    MatGridListModule, MatExpansionModule, MatSortModule, MatTableModule,
    MatToolbarModule, MatSelectModule, MatOptionModule,
    MatSnackBarModule, MatDialogModule, MatInputModule,
    MatDatepickerModule, MatCheckboxModule, MatNativeDateModule,
    MatPaginatorModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    HttpClientModule
  ],
  entryComponents: [KreditComponent, KlijentComponent, RacunComponent, TipRacunaComponent],
  providers: [KreditService, KlijentService, RacunService, TipRacunaService],
  bootstrap: [AppComponent]
})
export class AppModule { }