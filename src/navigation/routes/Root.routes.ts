import { FunctionComponent } from "react"
import PublicNavigation from "../PublicNavigation";

export type RootType = {
    name: string,
    component: FunctionComponent;
    label?: string
}

export type RouteMapType = {
    [key: string]: RootType;
}

const RootRoute: RouteMapType = {
    PublicNav: {
        name: 'PUBLIC_NAVIGATION',
        component: PublicNavigation
    }
}

export default RootRoute;
