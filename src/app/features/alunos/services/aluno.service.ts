import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = `${environment.apiUrl}/alunos`

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.API)
  }

}
