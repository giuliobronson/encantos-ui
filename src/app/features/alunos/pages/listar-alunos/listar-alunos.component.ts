import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Aluno } from '../../models/aluno.interface';
import { AlunoService } from '../../services/aluno.service';
import { ACTION_STRATEGIES } from '../../shared/action-strategy.token';
import { FabActionStrategy } from '../../shared/fab-action-strategy.interface';
import { TableService } from 'src/app/shared/services/table.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.scss']
})
export class ListarAlunosComponent implements OnInit, OnDestroy {

  alunos: Aluno[] = [];
  alunoFields = {
    id: 'Id',
    nome: 'Nome',
    cpf: 'CPF',
    dataNascimento: 'Data de Nascimento',
    dataCadastro: 'Data de Cadastro'
  }

  private unsubscribe$ = new Subject<void>();

  constructor(
    private alunoService: AlunoService,
    private tableService: TableService,
    @Inject(ACTION_STRATEGIES) private actionStrategies: { [key: string]: FabActionStrategy }
  ) { }

  ngOnInit(): void {
    this.loadAlunos();

    this.tableService.updateTable$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.loadAlunos();
      });
  }

  loadAlunos() {
    this.alunoService.getAlunos().subscribe({
      next: alunos => this.alunos = alunos.content,
      error: () => this.alunos = []
    });
  }

  openDialog(action: { actionType: string, data?: Aluno }): void {
    const strategy = this.actionStrategies[action.actionType];
    strategy.execute(action?.data);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();  
    this.unsubscribe$.complete();
  }

}
