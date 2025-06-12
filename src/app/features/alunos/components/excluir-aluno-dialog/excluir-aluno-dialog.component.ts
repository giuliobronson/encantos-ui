import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlunoService } from '../../services/aluno.service';
import { TableService } from 'src/app/shared/services/table.service';
import { Aluno } from '../../models/aluno.interface';

@Component({
  selector: 'app-excluir-aluno-dialog',
  templateUrl: './excluir-aluno-dialog.component.html',
  styleUrls: ['./excluir-aluno-dialog.component.scss']
})
export class ExcluirAlunoDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ExcluirAlunoDialogComponent>,
    private alunoService: AlunoService,
    private tableService: TableService,
    @Inject(MAT_DIALOG_DATA) public data: Aluno
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.alunoService.deleteAluno(this.data.id).subscribe({
      next: () => {
        this.tableService.notifyUpdate();
        this.dialogRef.close();
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
