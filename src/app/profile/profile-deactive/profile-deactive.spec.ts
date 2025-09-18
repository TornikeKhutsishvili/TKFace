import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDeactive } from './profile-deactive';

describe('ProfileDeactive', () => {
  let component: ProfileDeactive;
  let fixture: ComponentFixture<ProfileDeactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDeactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDeactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
