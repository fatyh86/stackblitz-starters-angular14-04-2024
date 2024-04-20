import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTablesComponent } from './forms-tables.component';

describe('FormsTablesComponent', () => {
  let component: FormsTablesComponent;
  let fixture: ComponentFixture<FormsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
