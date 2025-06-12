import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAlunoDialogComponent } from './cadastrar-aluno-dialog.component';

describe('CadastrarAlunoDialogComponent', () => {
  let component: CadastrarAlunoDialogComponent;
  let fixture: ComponentFixture<CadastrarAlunoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAlunoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAlunoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
