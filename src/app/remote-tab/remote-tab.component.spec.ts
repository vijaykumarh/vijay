import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteTabComponent } from './remote-tab.component';

describe('RemoteTabComponent', () => {
  let component: RemoteTabComponent;
  let fixture: ComponentFixture<RemoteTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
