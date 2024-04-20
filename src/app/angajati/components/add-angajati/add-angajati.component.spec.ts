import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAngajatiComponent } from './add-angajati.component';

describe('AddAngajatiComponent', () => {
  let component: AddAngajatiComponent;
  let fixture: ComponentFixture<AddAngajatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAngajatiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAngajatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
