class Student {
    private name: string;
    protected studentId: number;

    constructor(name: string, studentId: number) {
        this.name = name;
        this.studentId = studentId;
    }

    public displayInfo(): void {
        console.log(`student Name: ${this.name}, Studnet Id: ${this.studentId}`);
    }
}

const student = new Student("Piri Lily", 12);
student.displayInfo();