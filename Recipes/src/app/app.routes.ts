import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { App } from './app';
import { ComponentePai } from './components/componente-pai/componente-pai';
import { ChangeDetection } from './components/change-detection/change-detection';
import { Formbuilder } from './components/formbuilder/formbuilder';

export const routes: Routes = [
    {
         path:"login", //sem /
        component:Login
    },{
         path:"",component:Home, //sem /
    },{
         path:"comp",component:ComponentePai, //sem /
    },{
         path:"t",component:ChangeDetection, //sem /
    }
    ,{
         path:"fb",component:Formbuilder, //sem /
    }
];
