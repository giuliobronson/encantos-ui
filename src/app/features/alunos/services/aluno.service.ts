import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TurmaAluno } from '../models/turma-aluno.interface';
import { Page } from 'src/app/shared/models/page.interface';

@Injectable({ 
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = `${environment.apiUrl}/alunos`;

  constructor(private http: HttpClient) { }

  createAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(`${this.API}`, aluno)
  }

  getAlunos(page: number = 0, size: number = 10): Observable<Page<Aluno>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<Page<Aluno>>(`${this.API}`, { params });
  }

  getAlunoById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.API}/${id}`);
  }

  getTurmasByAluno(id: number) {
    return this.http.get<TurmaAluno[]>(`${this.API}/${id}`);
  }

  editAluno(aluno: Aluno): Observable<Aluno> {
    return this.http.put<Aluno>(`${this.API}`, aluno);
  }

  deleteAluno(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

}
