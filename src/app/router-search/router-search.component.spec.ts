import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterSearchComponent } from './router-search.component';

describe('RouterSearchComponent', () => {
  let component: RouterSearchComponent;
  let fixture: ComponentFixture<RouterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
