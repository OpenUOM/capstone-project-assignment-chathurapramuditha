import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditStudentComponent = class EditStudentComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.navigation = this.router.getCurrentNavigation();
    }
    ngOnInit() {
        this.getStudentData();
    }
    getStudentData() {
        let student = {
            id: this.navigation.extras.state.id
        };
        this.service.getOneStudentData(student).subscribe((response) => {
            this.studentData = response[0];
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    editStudent(values) {
        values.id = this.navigation.extras.state.id;
        this.service.editStudent(values).subscribe((response) => {
            this.studentData = response[0];
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
};
EditStudentComponent = __decorate([
    Component({
        selector: 'app-edit-student',
        templateUrl: './edit-student.component.html',
        styleUrls: ['./edit-student.component.css']
    })
], EditStudentComponent);
export { EditStudentComponent };
//# sourceMappingURL=edit-student.component.js.map