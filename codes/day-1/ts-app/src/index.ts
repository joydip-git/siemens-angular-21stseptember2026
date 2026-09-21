var x = 10
//x = "joyip"

const multiply = (a: number, b: number): number => a * b;
const res = multiply(12, 13)
console.log(res);

class Person {
    private _id;
    private _name;
    private _salary;

    constructor(idVal: number, nameVal: string, salaryVal: number) {
        this._id = idVal;
        this._name = nameVal;
        this._salary = salaryVal;
    }
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    set salary(value: number) {
        this._salary = value;
    }
    get salary() {
        return this._salary;
    }
    print() {
        return `${this._id}, ${this._name}, ${this._salary}`;
    }
}
class Trainer extends Person {
    subject: string;

    constructor(idVal: number, nameVal: string, salaryVal: number, subjectVal: string) {
        super(idVal, nameVal, salaryVal);
        this.subject = subjectVal;
    }
    print() {
        return `${super.print()}, ${this.subject}`;
    }
}

const joyTrainer = new Trainer(1, "joydip", 1000, "JS")
console.log(joyTrainer.print());

interface Operations<T, TResult> {
    add(a: T, b: T): TResult;
}

class Impl implements Operations<number, string> {
    add(a: number, b: number): string {
        return (a + b).toString()
    }
}

interface Employee {
    id: number;
    name: string;
    salary: number;
    location?: string
}

interface Hr extends Employee {
    gratuity: number;
}

const emp: Employee = {
    id: 100,
    name: 'anil',
    salary: 1000
}

type myType = string | number
type Emp = {
    id: number,
    name: string,
    salary: number
}
type Developer = Emp & {
    incentive: number
}
type fnType<T, TResult> = (a: T, b: T) => TResult
const add: fnType<number, number> = (x: number, y: number) => x + y
