import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadastrarAlunoDialogComponent } from '../cadastrar-aluno-dialog/cadastrar-aluno-dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Aluno } from '../../models/aluno.interface';
import { AlunoService } from '../../services/aluno.service';
import { TableService } from 'src/app/shared/services/table.service';

@Component({
  selector: 'app-editar-aluno-dialog',
  templateUrl: './editar-aluno-dialog.component.html',
  styleUrls: ['./editar-aluno-dialog.component.scss']
})
export class EditarAlunoDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditarAlunoDialogComponent>,
    private alunoService: AlunoService,
    private tableService: TableService,
    @Inject(MAT_DIALOG_DATA) public data: Aluno
  ) {
    this.form = this.fb.group({
      nome: [data.nome],
      cpf: [data.cpf],
      dataNascimento: [data.dataNascimento]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedAluno: Aluno = {
        ...this.data,
        ...this.form.value
      }
      this.alunoService.editAluno(updatedAluno).subscribe({
        next: () => {
          this.tableService.notifyUpdate();
          this.dialogRef.close();
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
