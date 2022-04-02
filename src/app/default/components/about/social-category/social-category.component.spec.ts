import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialCategoryComponent } from './social-category.component';

describe('SocialCategoryComponent', () => {
  let component: SocialCategoryComponent;
  let fixture: ComponentFixture<SocialCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
