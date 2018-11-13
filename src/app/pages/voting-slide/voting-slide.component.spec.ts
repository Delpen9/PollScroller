import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingSlideComponent } from './voting-slide.component';

describe('VotingSlideComponent', () => {
  let component: VotingSlideComponent;
  let fixture: ComponentFixture<VotingSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
