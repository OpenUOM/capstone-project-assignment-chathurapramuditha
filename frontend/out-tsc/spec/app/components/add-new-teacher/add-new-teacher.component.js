import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddNewTeacherComponent = class AddNewTeacherComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    createTeacher(value) {
        const teacher = {
            id: value.id,
            name: value.name,
            age: value.age
        };
        this.service.addTeacher(teacher).subscribe((response) => {
            this.router.navigate(['']);
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
};
AddNewTeacherComponent = __decorate([
    Component({
        selector: 'app-add-new-teacher',
        templateUrl: './add-new-teacher.component.html',
        styleUrls: ['./add-new-teacher.component.css']
    })
], AddNewTeacherComponent);
export { AddNewTeacherComponent };
//# sourceMappingURL=add-new-teacher.component.js.map