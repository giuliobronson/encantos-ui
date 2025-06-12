import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirAlunoDialogComponent } from './excluir-aluno-dialog.component';

describe('ExcluirAlunoDialogComponent', () => {
  let component: ExcluirAlunoDialogComponent;
  let fixture: ComponentFixture<ExcluirAlunoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirAlunoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirAlunoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
