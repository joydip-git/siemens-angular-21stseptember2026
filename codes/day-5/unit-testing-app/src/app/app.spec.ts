import { ComponentFixture, TestBed } from "@angular/core/testing"
import { App } from "./app";
// import { ComponentRef, DebugElement } from "@angular/core";
// import { TodoService } from "./services/todo-service";
import { By } from "@angular/platform-browser";


describe(
  "App Unit Tests",
  () => {

    let fixture: ComponentFixture<App>;
    let app: App;
    //let svc: TodoService;

    beforeEach(
      () => {
        //svc = TestBed.inject(TodoService)
        fixture = TestBed.createComponent(App)
        app = fixture.componentInstance
      }
    )

    it("the component has been created",
      () => {
        // const appRef: ComponentRef<App> = fixture.componentRef
        // const app = appRef.instance
        expect(app).toBeDefined()
      })

    it("the component has a title property with a value -> Welcome to Unit Testing",
      () => {
        // const appRef: ComponentRef<App> = fixture.componentRef
        // const app = appRef.instance

        const actual = app.title
        const expected = 'Welcome to Unit Testing'
        expect(actual).toEqual(expected)
      }
    )

    it("the component template display the title property value in h2 element",
      () => {
        // const debugElement: DebugElement = fixture.debugElement
        // const header: HTMLElement = debugElement.nativeElement
        //await fixture.whenStable()
        fixture.autoDetectChanges()
        const header: HTMLElement = fixture.nativeElement
        expect(header.textContent).toMatch(/Unit Testing/)
      }
    )

    it("service is DI-ed",
      () => {
        expect(app.todoSvc).toBeDefined()
      }
    )

    it("table has 2 records",
      () => {
        fixture.detectChanges()
        const template = fixture.debugElement
        const tbodyDebugElement = template.query(By.css('#todosbody'))
        expect(tbodyDebugElement.children.length).toBe(2)
        // const tbody = tbodyDebugElement.nativeElement as HTMLElement
        // expect(tbody.children.length).toBe(2)

        //const tbodyElement: HTMLElement = template.nativeElement
        //const tbody = tbodyElement.querySelector('tbody')
      }
    )
  }
)