import { TestBed } from '@angular/core/testing';

import { ShoppingDataService } from './shopping-data.service';

describe('ShoppingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoppingDataService = TestBed.get(ShoppingDataService);
    expect(service).toBeTruthy();
  });
});
