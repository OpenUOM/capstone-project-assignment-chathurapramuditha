import { async, TestBed } from '@angular/core/testing';
import { AddNewTeacherComponent } from './add-new-teacher.component';
describe('AddNewTeacherComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddNewTeacherComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AddNewTeacherComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=add-new-teacher.component.spec.js.map