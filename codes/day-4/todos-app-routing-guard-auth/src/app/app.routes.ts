import { Routes } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list';
import { TodoInfo } from './components/todo-info/todo-info';
import { Home } from './components/home/home';
import { EditTodoInfo } from './components/edit-todo-info/edit-todo-info';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
    {
        path: 'todos',
        children: [
            {
                path: '',
                component: TodoList
            },
            {
                path: 'edit/:id',
                component: EditTodoInfo
            },
            {
                path: 'view/:id',
                component: TodoInfo
            }
            // {
            //     path: 'view',
            //     component: TodoInfo
            // }
        ]
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    },
    {
        path: '**',
        component: PageNotFound
    }
];
