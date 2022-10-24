import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiUrl = "https://localhost:44348/api/Heroes"

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {

    return this.http.get<Hero[]>(`${this.apiUrl}/GetHeroes`);
  }

  getHeroById(id: number): Observable<Hero> {

    return this.http.get<Hero>(`${this.apiUrl}/GetHeroById/${id}`);
  }

  createHero(hero: Hero): Observable<Hero> {

    return this.http.post<Hero>(`${this.apiUrl}/CreateHero`, hero);
  }

  editHero(id: number, hero: Hero): Observable<any> {

    return this.http.put<Hero>(`${this.apiUrl}/EditHero/${id}`, hero);
  }

  deleteHeroById(id: number): Observable<any> {

    return this.http.delete<Hero>(`${this.apiUrl}/DeleteHeroById/${id}`);
  }
}
