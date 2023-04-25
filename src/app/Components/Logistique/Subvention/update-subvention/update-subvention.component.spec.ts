import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubventionComponent } from './update-subvention.component';

describe('UpdateSubventionComponent', () => {
  let component: UpdateSubventionComponent;
  let fixture: ComponentFixture<UpdateSubventionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSubventionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSubventionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
