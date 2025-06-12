import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAlunosComponent } from './pages/listar-alunos/listar-alunos.component';
import { ExibirAlunoComponent } from './pages/exibir-aluno/exibir-aluno.component';

const routes: Routes = [
  {
    path: '',
    component: ListarAlunosComponent
  },
  {
    path: ':id',
    component: ExibirAlunoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
