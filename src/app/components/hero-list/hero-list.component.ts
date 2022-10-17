import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HeroModel } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { DialogComponent } from '../dialog/dialog.component';
import { MatSort } from '@angular/material/sort';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public heroesList: HeroModel[] = [];
  public displayedColumns: string[] = ['superhero', 'actions'];
  public dataSource: MatTableDataSource<HeroModel>;
  public hero = new FormControl();
  public filteredOptions: HeroModel[];

  constructor(private heroesService: HeroesService,private dialog: MatDialog) {}

ngOnInit() {
  this.heroesService.getHeros();
  this.getHeroesList();
    this.hero.valueChanges.subscribe(value => {
      this.filterHeroes(value);
    });
}

public addSuperHero(): void {
  let heroData: HeroModel = {
    id: this.heroesList.length + 1,
    superhero: ''
  }
  this.openDialog(heroData,'Add SuperHero',null);
}

public editSuperHero(hero: HeroModel,i: number): void {
  let heroData: HeroModel = {
    id: hero.id,
    superhero: hero.superhero
  }
  this.openDialog(heroData,'Edit SuperHero',i);
}

public deleteSuperHero(heroData:HeroModel,i: number): void {
  this.openDialog(heroData,'Delete SuperHero',i);
}

public openDialog(heroData: HeroModel,operation: string ,position: number | null) {
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {data: heroData, operation: operation };
 
  this.dialog.open(DialogComponent, dialogConfig);
  const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
  dialogRef.afterClosed().subscribe(data => {

    if(data) {
      if (position !== null) {
        if (operation === 'Delete SuperHero') {
          this.heroesList.splice(position,1);
          this.heroesService.heroOperation(this.heroesList);
          this.refreshHeroesListTable(this.heroesList);
          this.clearFilter();
        } else {
          this.heroesList[position].superhero = data.superhero;
          this.heroesService.heroOperation(this.heroesList);
          this.refreshHeroesListTable(this.heroesList);
          this.clearFilter();
        }
       } else {
          this.heroesList.push(data);
          this.heroesService.heroOperation(this.heroesList);
          this.refreshHeroesListTable(this.heroesList);
          this.clearFilter();
       }
      }
    this.dialog.closeAll();
      }
  );    
}

public clearFilter(): void {
  this.hero.reset();
}

private getHeroesList(): void {
  this.heroesService.heroList$.subscribe(res => {
    this.heroesList = res;
    this.refreshHeroesListTable(this.heroesList);
  });
}

private filterHeroes(value: string): void {
  if(value) {
    const filterValue = value.toLowerCase();
    const filteredSet = this.heroesList.filter(option => option.superhero.toLowerCase().includes(filterValue));
    this.refreshHeroesListTable(filteredSet);
  } else {
    this.refreshHeroesListTable(this.heroesList);
  }
}

private refreshHeroesListTable(list: HeroModel[]): void {
  this.dataSource= new MatTableDataSource<HeroModel>(list);
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
}

}
