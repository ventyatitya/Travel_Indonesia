import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PulauPage } from './pulau.page';

describe('PulauPage', () => {
  let component: PulauPage;
  let fixture: ComponentFixture<PulauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PulauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PulauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
