import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotiAngajatiiComponent } from './toti-angajatii.component';

describe('TotiAngajatiiComponent', () => {
  let component: TotiAngajatiiComponent;
  let fixture: ComponentFixture<TotiAngajatiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotiAngajatiiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotiAngajatiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
