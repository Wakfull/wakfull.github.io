import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FecaGlypheComponent } from './feca-glyphe.component';

describe('FecaGlypheComponent', () => {
  let component: FecaGlypheComponent;
  let fixture: ComponentFixture<FecaGlypheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FecaGlypheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FecaGlypheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
