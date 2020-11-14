import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PagePulauPage } from './page-pulau.page';

describe('PagePulauPage', () => {
  let component: PagePulauPage;
  let fixture: ComponentFixture<PagePulauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePulauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PagePulauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
