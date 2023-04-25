import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOcComponent } from './create-oc.component';

describe('CreateOcComponent', () => {
  let component: CreateOcComponent;
  let fixture: ComponentFixture<CreateOcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
