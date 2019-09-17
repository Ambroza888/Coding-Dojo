import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VesoComponent } from './veso.component';

describe('VesoComponent', () => {
  let component: VesoComponent;
  let fixture: ComponentFixture<VesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
