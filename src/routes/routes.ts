import { lazy, LazyExoticComponent } from "react"
import { NoLazy } from "../01-lazyload/pages/NoLazy";
type JSXComponent = () => JSX.Element;
interface Route {
   path:string;
   component: LazyExoticComponent<JSXComponent> |  JSXComponent;
   name:string;
   children?:Route[]
}

const LazyLayout = lazy(()=>import(/* webpackChunkName:"LazyLoading Nested" */'../01-lazyload/layout/LazyLayout'));

export const routes:Route[] = [
    {
        path:'/lazyload',
        component:LazyLayout,
        name:'LazyLoading Nezted'
    },
    {
        path:'/no-lazy',
        component:NoLazy,
        name:'No Lazy loading'
    }
]