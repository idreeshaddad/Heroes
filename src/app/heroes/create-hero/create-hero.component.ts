import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/hero.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  createHeroForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private heroSvc: HeroesService,
    private router: Router) { }

  ngOnInit(): void {

    this.buildForm();
  }

  createHero(): void {

    if (this.createHeroForm.valid) {

      let hero: Hero = this.createHeroForm.value;
      this.heroSvc.createHero(hero).subscribe(
        hero => {
          alert("New hero was created with id: " + hero.id);
          this.router.navigate(['/heroes']);
        }

      );
    }
  }

  private buildForm(): void {

    this.createHeroForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

}
