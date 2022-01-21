import { TestBed } from '@angular/core/testing';

import { GetUsuarioService } from './get-usuario.service';

describe('GetUsuarioService', () => {
  let service: GetUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
