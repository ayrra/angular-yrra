import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilesocialfooterComponent } from './mobilesocialfooter.component';

describe('MobilesocialfooterComponent', () => {
  let component: MobilesocialfooterComponent;
  let fixture: ComponentFixture<MobilesocialfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilesocialfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilesocialfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
