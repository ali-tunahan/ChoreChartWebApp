import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditChoreComponent } from './add-edit-chore.component';

describe('AddEditChoreComponent', () => {
  let component: AddEditChoreComponent;
  let fixture: ComponentFixture<AddEditChoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditChoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditChoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
