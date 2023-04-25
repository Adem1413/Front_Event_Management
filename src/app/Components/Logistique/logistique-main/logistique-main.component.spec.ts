import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogistiqueMainComponent } from './logistique-main.component';

describe('LogistiqueMainComponent', () => {
  let component: LogistiqueMainComponent;
  let fixture: ComponentFixture<LogistiqueMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogistiqueMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogistiqueMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
