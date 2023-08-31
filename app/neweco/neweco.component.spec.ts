import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewecoComponent } from './neweco.component';

describe('NewecoComponent', () => {
  let component: NewecoComponent;
  let fixture: ComponentFixture<NewecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewecoComponent]
    });
    fixture = TestBed.createComponent(NewecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
