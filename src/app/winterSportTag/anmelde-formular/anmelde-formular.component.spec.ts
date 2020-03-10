import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmeldeFormularComponent } from './anmelde-formular.component';

describe('AnmeldeFormularComponent', () => {
  let component: AnmeldeFormularComponent;
  let fixture: ComponentFixture<AnmeldeFormularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnmeldeFormularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmeldeFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
