import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoringMainComponent } from './sponsoring-main.component';

describe('SponsoringMainComponent', () => {
  let component: SponsoringMainComponent;
  let fixture: ComponentFixture<SponsoringMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponsoringMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SponsoringMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
