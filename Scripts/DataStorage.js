// Created each time a user checks in
class AttendanceRecord {
    constructor(type, date, room, time) {
        this.type = type;
        this.date = date; 
        this.room = room; 
        this.time = time; 
    }
}

// Overall object that holds a student's information
class StudentRecord {
    constructor(studentid) {
        this.studentid = studentid;  
        this.attendance = new AttendanceStorageObj; 
        this.enlisted_modules = ["CI517", "CI520", "CI536"]; 
    }

}

// data.student.attendance, holds an object for each module
class AttendanceStorageObj {
    constructor() {
        this.CI517 = new ModuleObj;  
        this.CI520 = new ModuleObj;  
        this.CI536 = new ModuleObj; 
    }
}

// Holds module information and an array of AttendanceRecord objects
class ModuleObj {
    constructor() {
        this.meetings = 0; 
        this.entries_num = 0; 
        this.entries = []; 
    }
}

export { StudentRecord, AttendanceRecord }; 
