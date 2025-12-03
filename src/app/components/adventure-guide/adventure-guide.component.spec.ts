import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureGuideComponent } from './adventure-guide.component';

describe('AdventureGuideComponent', () => {
  let component: AdventureGuideComponent;
  let fixture: ComponentFixture<AdventureGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdventureGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
