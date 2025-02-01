import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElioBasicComponent } from './elio-basic.component';

describe('ElioBasicComponent', () => {
  let component: ElioBasicComponent;
  let fixture: ComponentFixture<ElioBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElioBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElioBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
