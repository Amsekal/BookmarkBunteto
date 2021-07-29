import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentComponent } from './ment.component';

describe('MentComponent', () => {
  let component: MentComponent;
  let fixture: ComponentFixture<MentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
