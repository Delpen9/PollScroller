import { TestBed, inject } from '@angular/core/testing';

import { HomePollService } from './home-poll-service.service';

describe('HomePollServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomePollService]
    });
  });

  it('should be created', inject([HomePollService], (service: HomePollService) => {
    expect(service).toBeTruthy();
  }));
});
