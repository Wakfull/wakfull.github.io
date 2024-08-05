import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElioDistComponent } from './elio-dist.component';

describe('ElioDistComponent', () => {
  let component: ElioDistComponent;
  let fixture: ComponentFixture<ElioDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElioDistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElioDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
