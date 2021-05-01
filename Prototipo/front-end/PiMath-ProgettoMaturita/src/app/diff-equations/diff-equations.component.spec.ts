import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffEquationsComponent } from './diff-equations.component';

describe('DiffEquationsComponent', () => {
  let component: DiffEquationsComponent;
  let fixture: ComponentFixture<DiffEquationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffEquationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffEquationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
