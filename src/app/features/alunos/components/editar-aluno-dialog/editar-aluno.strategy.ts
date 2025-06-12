import { MatDialog } from "@angular/material/dialog";
import { EditarAlunoDialogComponent } from "./editar-aluno-dialog.component";
import { FabActionStrategy } from "../../shared/fab-action-strategy.interface";

export class EditarAlunoStrategy implements FabActionStrategy {

    constructor(private dialog: MatDialog) { }

    execute(data: any) {
        this.dialog.open(EditarAlunoDialogComponent, {
            width: '500px',
            data: data
        });
    }

}