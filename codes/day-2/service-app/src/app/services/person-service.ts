import { Injectable, Service } from "@angular/core";
import { people } from "../data/people";
import { Person } from "../models/person";

export interface ServiceContract<T> {
    getAll(): T[];
    get(id: number): T | undefined;
}
//@Service()
//@Injectable({providedIn:'root'})
export class PersonService implements ServiceContract<Person> {
    constructor() {
        console.log('service created...');
    }
    getAll(): Person[] {
        return people
    }
    get(id: number): Person | undefined {
        return people.find(p => p.id === id)
    }
}