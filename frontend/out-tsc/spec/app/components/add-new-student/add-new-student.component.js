import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddNewStudentComponent = class AddNewStudentComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    createStudent(value) {
        const student = {
            id: value.id,
            name: value.name,
            age: value.age,
            hometown: value.Hometown
        };
        this.service.addStudent(student).subscribe((response) => {
            this.router.navigate(['student']);
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
};
AddNewStudentComponent = __decorate([
    Component({
        selector: 'app-add-new-student',
        templateUrl: './add-new-student.component.html',
        styleUrls: ['./add-new-student.component.css']
    })
], AddNewStudentComponent);
export { AddNewStudentComponent };
//# sourceMappingURL=add-new-student.component.js.map