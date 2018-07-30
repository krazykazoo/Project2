import { TestBed, inject } from '@angular/core/testing';

import { MessageLoggerService } from './message-logger.service';

describe('MessageLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageLoggerService]
    });
  });

  it('should be created', inject([MessageLoggerService], (service: MessageLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
