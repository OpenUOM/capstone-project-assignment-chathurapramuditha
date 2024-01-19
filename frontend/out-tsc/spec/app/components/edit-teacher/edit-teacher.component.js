import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditTeacherComponent = class EditTeacherComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.navigation = this.router.getCurrentNavigation();
    }
    ngOnInit() {
        this.getTeacherData();
    }
    getTeacherData() {
        let teacher = {
            id: this.navigation.extras.state.id
        };
        this.service.getOneTeacherData(teacher).subscribe((response) => {
            this.teacherData = response[0];
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    editTeacher(values) {
        values.id = this.navigation.extras.state.id;
        this.service.editTeacher(values).subscribe((response) => {
            this.teacherData = response[0];
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
};
EditTeacherComponent = __decorate([
    Component({
        selector: 'app-edit-teacher',
        templateUrl: './edit-teacher.component.html',
        styleUrls: ['./edit-teacher.component.css']
    })
], EditTeacherComponent);
export { EditTeacherComponent };
//# sourceMappingURL=edit-teacher.component.js.map