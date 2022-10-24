import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.css']
})
export class DeleteHeroComponent implements OnInit {

  hero?: Hero;
  heroId?: number;

  constructor(
    private heroSvc: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.getIdFromUrl();

    if (this.heroId) {

      this.getHeroById();
    }
    else {
      alert("No hero ID was provided in the URL");
      this.router.navigate(['/heroes']);
    }
  }

  getIdFromUrl(): void {

    this.heroId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getHeroById() {

    this.heroSvc.getHeroById(this.heroId!).subscribe(
      (heroFromBackend: Hero) => {
        this.hero = heroFromBackend;
      },
      error => {
        alert("A hero with the given ID is not found, redurecting to Heros list page");
        this.router.navigate(['/heroes']);
      });
  }

  deleteHero(): void {

    let confirmation = confirm("Are you sure you want to delete this hero?");

    if (confirmation) {
      this.heroSvc.deleteHeroById(this.heroId!).subscribe(
        result => {
          alert("Hero has been deleted successfully.");
          this.router.navigate(['/heroes']);
        }
      );
    }
  }

}
