import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../models/aluno';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.scss']
})
export class ListarAlunosComponent implements OnInit {

  alunos!: Aluno[];
  alunoFields = {
    id: 'Id', 
    nome: 'Nome', 
    cpf: 'CPF', 
    dataNascimento: 'Data de Nascimento', 
    dataCadastro: 'Data de Cadastro'
  }

  constructor(private service: AlunoService) { }

  ngOnInit(): void {
    this.service.getAlunos().subscribe(alunos => {
      this.alunos = alunos;
    })
  }

}
