import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOcComponent } from './update-oc.component';

describe('UpdateOcComponent', () => {
  let component: UpdateOcComponent;
  let fixture: ComponentFixture<UpdateOcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
