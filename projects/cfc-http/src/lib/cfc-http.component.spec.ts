import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CfcHttpComponent } from './cfc-http.component';

describe('CfcHttpComponent', () => {
  let component: CfcHttpComponent;
  let fixture: ComponentFixture<CfcHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CfcHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CfcHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
