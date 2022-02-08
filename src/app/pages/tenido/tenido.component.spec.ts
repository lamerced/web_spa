import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenidoComponent } from './tenido.component';

describe('TenidoComponent', () => {
  let component: TenidoComponent;
  let fixture: ComponentFixture<TenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
