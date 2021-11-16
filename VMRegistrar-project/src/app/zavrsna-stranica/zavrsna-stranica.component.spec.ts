import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavrsnaStranicaComponent } from './zavrsna-stranica.component';

describe('ZavrsnaStranicaComponent', () => {
  let component: ZavrsnaStranicaComponent;
  let fixture: ComponentFixture<ZavrsnaStranicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZavrsnaStranicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZavrsnaStranicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
