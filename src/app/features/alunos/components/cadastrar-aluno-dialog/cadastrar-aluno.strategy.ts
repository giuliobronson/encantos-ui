import { MatDialog } from "@angular/material/dialog";
import { FabActionStrategy } from "../../shared/fab-action-strategy.interface";
import { CadastrarAlunoDialogComponent } from "./cadastrar-aluno-dialog.component";

export class CadastrarAlunoStrategy implements FabActionStrategy {

    constructor(private dialog: MatDialog) { }

    execute(data: any) {
        this.dialog.open(CadastrarAlunoDialogComponent, {
            width: '500px',
            data: data
        });
    }

}