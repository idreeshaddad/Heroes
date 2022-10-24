import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes!: Hero[];

  constructor(private heroSvc: HeroesService) { }

  ngOnInit(): void {

    this.getHeroes();
  }

  private getHeroes(): void {

    this.heroSvc.getHeroes().subscribe(
      heroes => {
        this.heroes = heroes;
      }
    );
  }
}
