import { Navigate, Outlet } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../"

export const heroesChildRoutesConfig = [

    {
        index: true,
        element: <Navigate to={'/marvel'} />,
    },
    {
        path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "dc",
        element: <DCPage />,
    },
    {
        path: "search",
        element: <SearchPage />,
    },
    {
        path: "hero/:id",
        element: <HeroPage />,
    },
]


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">
                <Outlet/>
            </div>
        </>
    )
}
