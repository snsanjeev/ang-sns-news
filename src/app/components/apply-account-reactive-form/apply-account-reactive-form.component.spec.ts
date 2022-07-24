import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAccountReactiveFormComponent } from './apply-account-reactive-form.component';

describe('ApplyAccountReactiveFormComponent', () => {
  let component: ApplyAccountReactiveFormComponent;
  let fixture: ComponentFixture<ApplyAccountReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyAccountReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyAccountReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
