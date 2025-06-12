import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosRoutingModule } from './alunos.routing.module';
import { ListarAlunosComponent } from './pages/listar-alunos/listar-alunos.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastrarAlunoDialogComponent } from './components/cadastrar-aluno-dialog/cadastrar-aluno-dialog.component';
import { CadastrarAlunoStrategy } from './components/cadastrar-aluno-dialog/cadastrar-aluno.strategy';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ACTION_STRATEGIES } from './shared/action-strategy.token';
import { EditarAlunoDialogComponent } from './components/editar-aluno-dialog/editar-aluno-dialog.component';
import { ExcluirAlunoDialogComponent } from './components/excluir-aluno-dialog/excluir-aluno-dialog.component';
import { EditarAlunoStrategy } from './components/editar-aluno-dialog/editar-aluno.strategy';
import { ExibirAlunoComponent } from './pages/exibir-aluno/exibir-aluno.component';
import { ExibirAlunoStrategy } from './pages/exibir-aluno/exibir-aluno.strategy';
import { Router, RouterModule } from '@angular/router';
import { ExcluirAlunoStrategy } from './components/excluir-aluno-dialog/excluir-aluno.strategy';


@NgModule({
  declarations: [
    ListarAlunosComponent,
    CadastrarAlunoDialogComponent,
    EditarAlunoDialogComponent,
    ExcluirAlunoDialogComponent,
    ExibirAlunoComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    {
      provide: ACTION_STRATEGIES,
      useFactory: (dialog: MatDialog, router: Router) => ({
        cadastrar: new CadastrarAlunoStrategy(dialog),
        editar: new EditarAlunoStrategy(dialog),
        excluir: new ExcluirAlunoStrategy(dialog),
        exibir: new ExibirAlunoStrategy(router)
      }),
      deps: [MatDialog, Router]
    }
  ]
})
export class AlunosModule { }
