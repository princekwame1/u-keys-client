import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileOfCeoComponent } from './profile-of-ceo.component';

describe('ProfileOfCeoComponent', () => {
  let component: ProfileOfCeoComponent;
  let fixture: ComponentFixture<ProfileOfCeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileOfCeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileOfCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
