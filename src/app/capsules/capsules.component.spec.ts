import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapsulesService } from '../capsules.service';
import { CapsulesComponent } from './capsules.component';

describe('CapsulesComponentx', () => {
  let component: CapsulesComponent;
  let fixture: ComponentFixture<CapsulesComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [CapsulesService ],
      imports:[HttpClientTestingModule],
      providers:[CapsulesService]
    }).compileComponents();

    fixture = TestBed.createComponent(CapsulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

