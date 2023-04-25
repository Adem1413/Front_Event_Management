import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIntervenentComponent } from './create-intervenent.component';

describe('CreateIntervenentComponent', () => {
  let component: CreateIntervenentComponent;
  let fixture: ComponentFixture<CreateIntervenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIntervenentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIntervenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
