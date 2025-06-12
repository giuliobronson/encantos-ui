import { MatDialog } from "@angular/material/dialog";
import { ExcluirAlunoDialogComponent } from "./excluir-aluno-dialog.component";
import { FabActionStrategy } from "../../shared/fab-action-strategy.interface";

export class ExcluirAlunoStrategy implements FabActionStrategy {

    constructor(private dialog: MatDialog) { }

    execute(data: any) {
        this.dialog.open(ExcluirAlunoDialogComponent, {
            width: '300px',
            data: data
        });
    }
}