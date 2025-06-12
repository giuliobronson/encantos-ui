import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { TurmaAluno } from '../../models/turma-aluno.interface';
import { forkJoin } from 'rxjs';
import { Aluno } from '../../models/aluno.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exibir-aluno',
  templateUrl: './exibir-aluno.component.html',
  styleUrls: ['./exibir-aluno.component.scss']
})
export class ExibirAlunoComponent implements OnInit {

  id!: number;
  aluno!: Aluno;
  turmas: TurmaAluno[] = [];
  turmaFields = {
    id: 'Id',
    nome: 'Nome da Turma',
    professor: 'Professor',
    disciplina: 'Disciplina',
    dataCadastro: 'Data de Cadastro'
  }

  constructor(private service: AlunoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadAluno();
  }

  loadAluno() {
    forkJoin({
      aluno: this.service.getAlunoById(this.id),
      turmas: this.service.getTurmasByAluno(this.id)
    }).subscribe({
      next: ({ aluno, turmas }) => {
        this.aluno = aluno;
        this.turmas = turmas;
      },
      error: () => this.turmas = []
    });
  }

}
