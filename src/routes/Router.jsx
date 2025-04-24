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
                // by default home will be show category 1 data which will be step up by navigate then i use [path name and category id]
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path : '/category/:news_id',
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.news_id}`),
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