import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "../Layouts/Home"
import CategoryNews from "../Pages/CategoryNews"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        children:[
            {
                path : '/',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path : '/category/:id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element : <CategoryNews></CategoryNews>,
            }
        ]
    },
    {
        path : '/news',
        element : <h2>This is news components</h2>
    },
    {
        path : '/auth',
        element : <h1>This is auth</h1>
    },
    {
        path : '*',
        element : <h1>Error Found</h1>
    },
    {
        path : '/google',
        element : <div>Google</div>
    }
])

Router.propTypes = {}

export default Router