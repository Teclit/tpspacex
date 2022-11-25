import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchesService } from '../launches.service';
import { LaunchesComponent } from './launches.component';

describe('LaunchesComponent', () => {
  let component: LaunchesComponent;
  let fixture: ComponentFixture<LaunchesComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [LaunchesComponent ],
      imports:[HttpClientTestingModule],
      providers:[LaunchesService]
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

