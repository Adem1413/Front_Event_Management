import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubventionListComponent } from './subvention-list.component';

describe('SubventionListComponent', () => {
  let component: SubventionListComponent;
  let fixture: ComponentFixture<SubventionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubventionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubventionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
