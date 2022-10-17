import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SpinnerComponent } from './spinner/spinner.component';
import { TitleCaseDirective } from '../directives/title-case.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroListComponent,
    DialogComponent,
    SpinnerComponent,
    TitleCaseDirective
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatProgressSpinnerModule

  ],
  exports: [HeroListComponent,DialogComponent,SpinnerComponent,TitleCaseDirective],
  providers: [],
})

export class ComponentsModule { }
