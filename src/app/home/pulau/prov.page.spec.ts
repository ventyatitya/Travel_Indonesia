import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProvPage } from './prov.page';

describe('ProvPage', () => {
  let component: ProvPage;
  let fixture: ComponentFixture<ProvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
