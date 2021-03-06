import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdicionarComponent } from './form-adicionar.component';

describe('FormAdicionarComponent', () => {
  let component: FormAdicionarComponent;
  let fixture: ComponentFixture<FormAdicionarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAdicionarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
