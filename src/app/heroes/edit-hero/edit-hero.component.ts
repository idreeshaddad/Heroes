import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  heroId?: number;
  editHeroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private heroSvc: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.buildForm();

    this.getHeroIdFromUrl();

    if (this.heroId) {
      this.getHero()
    }
  }

  buildForm() {

    this.editHeroForm = this.fb.group({
      id: [''],
      name: ['', Validators.required]
    });
  }

  getHeroIdFromUrl() {

    this.heroId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getHero() {

    this.heroSvc.getHeroById(this.heroId!).subscribe(
      heroFromDB => {
        this.editHeroForm.patchValue({
          id: heroFromDB.id,
          name: heroFromDB.name
        });
      }
    )
  }

  saveHero(): void {

    if (this.editHeroForm.valid) {

      let hero: Hero = this.editHeroForm.value;

      this.heroSvc.editHero(this.heroId!, hero).subscribe(
        result => {
          alert("Hero has been edited successfully");
          this.router.navigate(['/heroes']);
        }
      );
    }
  }
}
