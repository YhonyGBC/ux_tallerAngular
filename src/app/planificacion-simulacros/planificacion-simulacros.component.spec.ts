import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionSimulacrosComponent } from './planificacion-simulacros.component';

describe('PlanificacionSimulacrosComponent', () => {
  let component: PlanificacionSimulacrosComponent;
  let fixture: ComponentFixture<PlanificacionSimulacrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificacionSimulacrosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanificacionSimulacrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
