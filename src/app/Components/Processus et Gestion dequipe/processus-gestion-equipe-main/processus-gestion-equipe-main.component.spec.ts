import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessusGestionEquipeMainComponent } from './processus-gestion-equipe-main.component';

describe('ProcessusGestionEquipeMainComponent', () => {
  let component: ProcessusGestionEquipeMainComponent;
  let fixture: ComponentFixture<ProcessusGestionEquipeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessusGestionEquipeMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessusGestionEquipeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
