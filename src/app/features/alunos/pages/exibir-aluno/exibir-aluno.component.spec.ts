import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirAlunoComponent } from './exibir-aluno.component';

describe('ExibirAlunoComponent', () => {
  let component: ExibirAlunoComponent;
  let fixture: ComponentFixture<ExibirAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
