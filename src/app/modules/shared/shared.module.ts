import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from 'src/app/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule
  ]
})
export class SharedModule { }
