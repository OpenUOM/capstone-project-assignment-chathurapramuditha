import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';
let StudentTableComponent = class StudentTableComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.faTrash = faTrash;
        this.faPlus = faPlus;
        this.faPenSquare = faPenSquare;
    }
    ngOnInit() {
        this.getStudentData();
    }
    addNewStudent() {
        this.router.navigate(['addStudent']);
    }
    editStudent(id) {
        const navigationExtras = {
            state: {
                id: id
            }
        };
        this.router.navigate(['editStudent'], navigationExtras);
    }
    getStudentData() {
        this.service.getStudentData().subscribe((response) => {
            this.studentData = Object.keys(response).map((key) => [response[key]]);
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    deleteStudent(itemid) {
        const student = {
            id: itemid
        };
        this.service.deleteStudent(student).subscribe((response) => {
            this.getStudentData();
        });
    }
    search(value) {
        let foundItems = [];
        if (value.length <= 0) {
            this.getStudentData();
        }
        else {
            let b = this.studentData.filter((student) => {
                if (student[0].name.toLowerCase().indexOf(value) > -1) {
                    foundItems.push(student);
                }
            });
            this.studentData = foundItems;
        }
    }
};
StudentTableComponent = __decorate([
    Component({
        selector: 'app-student-table',
        templateUrl: './student-table.component.html',
        styleUrls: ['./student-table.component.css']
    })
], StudentTableComponent);
export { StudentTableComponent };
//# sourceMappingURL=student-table.component.js.map