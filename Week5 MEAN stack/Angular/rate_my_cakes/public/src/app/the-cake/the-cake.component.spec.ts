import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCakeComponent } from './the-cake.component';

describe('TheCakeComponent', () => {
  let component: TheCakeComponent;
  let fixture: ComponentFixture<TheCakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheCakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
