import { Component, inject, Inject, signal } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Person } from './models/person';
import { PersonService, ServiceContract } from './services/person-service';
import { TOKEN } from './config/constants';
//import { providePersonProvider } from './config/constants';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
  //providers: [providePersonProvider()]
})
export class App {
  protected records = signal<Person[]>([])

  //TOKEN is a InjectionToken type
  //private ps: PersonService = inject(TOKEN)
  //or (for loose coupling)
  private ps = inject<ServiceContract<Person>>(TOKEN)

  constructor() {
    console.log('App comp created...');
    this.records.set(this.ps.getAll())
  }

  //or use  constructor
  //private ps: PersonService;
  // constructor(@Inject(TOKEN) ps: PersonService) {
  //   this.ps = ps
  //   this.records.set(this.ps.getAll())
  // }

  //or (for loose coupling)
  // private ps: ServiceContract<Person>;
  // constructor(@Inject(TOKEN) ps: ServiceContract<Person>) {
  //   this.ps = ps
  //   this.records.set(this.ps.getAll())
  // }

  //TOKEN is a string (you can't use inject() method)
  //private ps: PersonService = inject(TOKEN)
  //private path = inject('PATH_VALUE')

  //use constructor injection when token is string
  // private ps: PersonService;
  // constructor(
  //   @Inject(TOKEN) ps: PersonService,
  //   @Inject('PATH_VALUE') path: string
  // ) {
  //   this.ps = ps
  //   this.records.set(this.ps.getAll())
  // }

  //when class itself is the token
  //private ps: PersonService = inject(TOKEN)
  //or 
  // use constructor injection (no need to use @Inject() as angular will look for a provider with the same name as that of the Class name)

  //private ps: PersonService;
  //private path = ''
  // constructor(
  //   ps: PersonService, 
  //   @Inject('PATH_VALUE') path: string
  // ) {
  //   console.log('App comp created...');
  //   this.path = path
  //   this.ps = ps
  //   //this.ps = new PersonService()
  //   this.records.set(this.ps.getAll())
  // }
  // sample() {
  //   const p =  inject(PersonService)
  // }
}
