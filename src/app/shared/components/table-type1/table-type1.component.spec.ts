import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableType1Component } from './table-type1.component';

describe('TableType1Component', () => {
  let component: TableType1Component;
  let fixture: ComponentFixture<TableType1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableType1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
