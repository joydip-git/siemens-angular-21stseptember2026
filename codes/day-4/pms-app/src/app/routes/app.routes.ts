import { Routes } from '@angular/router';
import { ProductContainer } from '../modules/products/components/product-container/product-container';
import { AddProduct } from '../modules/products/components/add-product/add-product';
import { ViewProduct } from '../modules/products/components/view-product/view-product';
import { EditProduct } from '../modules/products/components/edit-product/edit-product';
import { Home } from '../modules/shared/components/home/home';
import { PagenotFound } from '../modules/shared/components/pagenot-found/pagenot-found';

export const routes: Routes = [
    {
        path: "products",
        children: [
            {
                path: "",
                component: ProductContainer
            },
            {
                path: "view/:id",
                component: ViewProduct
            },
            {
                path: "edit",
                component: EditProduct
            },
            {
                path: "add",
                component: AddProduct
            },
        ]
    },
    {
        path: "home",
        component: Home
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/home"
    },
    {
        path: "**",
        component: PagenotFound
    }
];
