import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { faTrash, faPlus, faPenSquare } from '@fortawesome/free-solid-svg-icons';
let TeacherTableComponent = class TeacherTableComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.faTrash = faTrash;
        this.faPlus = faPlus;
        this.faPenSquare = faPenSquare;
    }
    ngOnInit() {
        this.getTeacherData();
    }
    addNewTeacher() {
        this.router.navigate(['addTeacher']);
    }
    editTeacher(id) {
        const navigationExtras = {
            state: {
                id: id
            }
        };
        this.router.navigate(['editTeacher'], navigationExtras);
    }
    initializeDB() {
        this.service.initializeDB().subscribe((response) => {
            console.log('DB is Initialized');
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    getTeacherData() {
        this.selected = 'Teachers';
        this.service.getTeacherData().subscribe((response) => {
            this.teacherData = Object.keys(response).map((key) => [response[key]]);
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    getStudentData() {
        this.selected = 'Students';
        this.service.getStudentData().subscribe((response) => {
            this.teacherData = response;
        }, (error) => {
            console.log('ERROR - ', error);
        });
    }
    search(value) {
        let foundItems = [];
        if (value.length <= 0) {
            this.getTeacherData();
        }
        else {
            let b = this.teacherData.filter((teacher) => {
                if (teacher[0].name.toLowerCase().indexOf(value) > -1) {
                    foundItems.push(teacher);
                }
            });
            this.teacherData = foundItems;
        }
    }
    deleteTeacher(itemid) {
        const test = {
            id: itemid
        };
        this.service.deleteTeacher(test).subscribe((response) => {
            this.getTeacherData();
        });
    }
};
TeacherTableComponent = __decorate([
    Component({
        selector: 'app-teacher-table',
        templateUrl: './teacher-table.component.html',
        styleUrls: ['./teacher-table.component.css']
    })
], TeacherTableComponent);
export { TeacherTableComponent };
//# sourceMappingURL=teacher-table.component.js.map