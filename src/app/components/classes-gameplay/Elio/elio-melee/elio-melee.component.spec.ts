import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElioMeleeComponent } from './elio-melee.component';

describe('ElioMeleeComponent', () => {
  let component: ElioMeleeComponent;
  let fixture: ComponentFixture<ElioMeleeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElioMeleeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElioMeleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
