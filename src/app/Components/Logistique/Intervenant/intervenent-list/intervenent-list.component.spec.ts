import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervenentListComponent } from './intervenent-list.component';

describe('IntervenentListComponent', () => {
  let component: IntervenentListComponent;
  let fixture: ComponentFixture<IntervenentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervenentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervenentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
