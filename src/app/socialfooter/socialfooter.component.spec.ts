import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialfooterComponent } from './socialfooter.component';

describe('SocialfooterComponent', () => {
  let component: SocialfooterComponent;
  let fixture: ComponentFixture<SocialfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
