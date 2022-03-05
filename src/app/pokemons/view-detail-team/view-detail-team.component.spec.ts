import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailTeamComponent } from './view-detail-team.component';

describe('ViewDetailTeamComponent', () => {
  let component: ViewDetailTeamComponent;
  let fixture: ComponentFixture<ViewDetailTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
