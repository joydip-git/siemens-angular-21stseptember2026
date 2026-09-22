import { ClassProvider, FactoryProvider, InjectionToken, Provider, ValueProvider } from "@angular/core";
import { PersonService, ServiceContract } from "../services/person-service";
import { Person } from "../models/person";

//when TOKEN is Service itself
//you can ask for DI of PersonService through constructor or via inject() method
//export const TOKEN = PersonService

//when TOKEN is string
//you can ask for DI of PersonService through constructor ONLY
//export const TOKEN = 'TOKEN'

//when TOKEN is an instance of InjectionToken
//you can ask for DI of instance of any type which implements ServiceContract<Person> through constructor or via inject() method
export const TOKEN = new InjectionToken<ServiceContract<Person>>('TOKEN')
export const SERVICE = PersonService

export const providePersonProvider = (): ClassProvider => {
    return {
        provide: TOKEN,
        useClass: SERVICE
    }
}

export const providePathValueProvider = (): ValueProvider => {
    return {
        provide: 'PATH_VALUE',
        useValue: 'C:\data.txt'
    }
}

export const providePersonValueProvider = (): ValueProvider => {
    return {
        provide: TOKEN,
        useValue: new PersonService()
    }
}

export const providePersonFactoryProvider = (): FactoryProvider => {
    return {
        provide: TOKEN,
        useFactory: () => {
            return new PersonService()
        }
    }
}