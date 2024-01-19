import { TestBed } from '@angular/core/testing';
import { AppServiceService } from './app-service.service';
describe('AppServiceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AppServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=app-service.service.spec.js.map