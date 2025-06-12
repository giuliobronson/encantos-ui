import { Router } from "@angular/router";
import { FabActionStrategy } from "../../shared/fab-action-strategy.interface";
import { Injectable } from "@angular/core";
import { Aluno } from "../../models/aluno.interface";


@Injectable()
export class ExibirAlunoStrategy implements FabActionStrategy {

    constructor(private router: Router) { }

    execute(data: Aluno) { 
        this.router.navigate(['/alunos', data.id]);
    }

}