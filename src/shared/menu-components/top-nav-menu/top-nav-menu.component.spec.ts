import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavMenuComponent } from './top-nav-menu.component';

describe('TopNavMenuComponent', () => {
  let component: TopNavMenuComponent;
  let fixture: ComponentFixture<TopNavMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNavMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
