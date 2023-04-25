import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIntervenentComponent } from './update-intervenent.component';

describe('UpdateIntervenentComponent', () => {
  let component: UpdateIntervenentComponent;
  let fixture: ComponentFixture<UpdateIntervenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIntervenentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateIntervenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
