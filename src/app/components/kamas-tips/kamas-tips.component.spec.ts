import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KamasTipsComponent } from './kamas-tips.component';

describe('KamasTipsComponent', () => {
  let component: KamasTipsComponent;
  let fixture: ComponentFixture<KamasTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KamasTipsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KamasTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
