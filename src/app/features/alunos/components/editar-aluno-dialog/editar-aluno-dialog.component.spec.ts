import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAlunoDialogComponent } from './editar-aluno-dialog.component';

describe('EditarAlunoDialogComponent', () => {
  let component: EditarAlunoDialogComponent;
  let fixture: ComponentFixture<EditarAlunoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAlunoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAlunoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
