import { createBrowserRouter, createHashRouter } from "react-router-dom";

import { ErrorPage } from "../ErrorPage";
import { LoginPage } from "../auth";
import { HeroesRoutes, heroesChildRoutesConfig } from "../heroes/routes/HeroesRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const routesConfig = [
    {
        path: "login",
        element: <PublicRoute> <LoginPage/> </PublicRoute>,
        errorElement: <ErrorPage />,
    },
    {
        
        path: "/",
        element: <PrivateRoute> <HeroesRoutes/> </PrivateRoute>,
        errorElement: <ErrorPage />,
        children: heroesChildRoutesConfig,
    }
] 

// export const AppRouter = () => createBrowserRouter(routesConfig);
export const AppRouter = () => createHashRouter(routesConfig);