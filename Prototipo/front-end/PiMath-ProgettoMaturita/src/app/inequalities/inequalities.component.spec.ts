import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InequalitiesComponent } from './inequalities.component';

describe('InequalitiesComponent', () => {
  let component: InequalitiesComponent;
  let fixture: ComponentFixture<InequalitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InequalitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InequalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
