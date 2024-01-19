import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
let AppServiceService = class AppServiceService {
    constructor(http) {
        this.http = http;
        if (environment.production == false) {
            this.ROOT_URL = 'test';
        }
        else {
            this.ROOT_URL = 'api';
        }
    }
    initializeDB() {
        return this.http.get(`/${this.ROOT_URL}/dbinitialize`);
    }
    getTeacherData() {
        return this.http.get(`/${this.ROOT_URL}/listTeachers`);
    }
    getStudentData() {
        return this.http.get(`/${this.ROOT_URL}/listStudents`);
    }
    getOneStudentData(payload) {
        return this.http.post(`/${this.ROOT_URL}/getStudentInfo`, payload);
    }
    getOneTeacherData(payload) {
        return this.http.post(`/${this.ROOT_URL}/getTeacherInfo`, payload);
    }
    addTeacher(payload) {
        return this.http.post(`/${this.ROOT_URL}/addTeacher`, payload);
    }
    deleteTeacher(payload) {
        return this.http.post(`/${this.ROOT_URL}/deleteTeacher`, payload);
    }
    editTeacher(payload) {
        return this.http.post(`/${this.ROOT_URL}/editTeacher`, payload);
    }
    editStudent(payload) {
        return this.http.post(`/${this.ROOT_URL}/editStudent`, payload);
    }
    addStudent(payload) {
        return this.http.post(`/${this.ROOT_URL}/addStudent`, payload);
    }
    deleteStudent(payload) {
        return this.http.post(`/${this.ROOT_URL}/deleteStudent`, payload);
    }
};
AppServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AppServiceService);
export { AppServiceService };
//# sourceMappingURL=app-service.service.js.map