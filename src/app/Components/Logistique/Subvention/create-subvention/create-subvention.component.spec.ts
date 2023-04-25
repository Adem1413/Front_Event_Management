import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubventionComponent } from './create-subvention.component';

describe('CreateSubventionComponent', () => {
  let component: CreateSubventionComponent;
  let fixture: ComponentFixture<CreateSubventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubventionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSubventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
