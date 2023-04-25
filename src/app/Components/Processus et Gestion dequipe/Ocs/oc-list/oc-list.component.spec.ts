import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcListComponent } from './oc-list.component';

describe('OcListComponent', () => {
  let component: OcListComponent;
  let fixture: ComponentFixture<OcListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
