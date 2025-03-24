import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorySettingsComponent } from './repository-settings.component';

describe('RepositorySettingsComponent', () => {
  let component: RepositorySettingsComponent;
  let fixture: ComponentFixture<RepositorySettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorySettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositorySettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
