import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReclamosPage } from './reclamos.page';

describe('ReclamosPage', () => {
  let component: ReclamosPage;
  let fixture: ComponentFixture<ReclamosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReclamosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
