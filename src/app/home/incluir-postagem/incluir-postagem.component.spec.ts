import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirPostagemComponent } from './incluir-postagem.component';

describe('IncluirPostagemComponent', () => {
  let component: IncluirPostagemComponent;
  let fixture: ComponentFixture<IncluirPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirPostagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
