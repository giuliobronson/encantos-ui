import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlunoService } from '../../services/aluno.service';
import { TableService } from 'src/app/shared/services/table.service';

@Component({
  selector: 'app-cadastrar-aluno-dialog',
  templateUrl: './cadastrar-aluno-dialog.component.html',
  styleUrls: ['./cadastrar-aluno-dialog.component.scss']
})
export class CadastrarAlunoDialogComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CadastrarAlunoDialogComponent>,
    private alunoService: AlunoService,
    private tableService: TableService
  ) {
    this.form = this.fb.group({
      nome: [''],
      cpf: [''],
      dataNascimento: ['']
    });
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.alunoService.createAluno(this.form.value).subscribe({
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
