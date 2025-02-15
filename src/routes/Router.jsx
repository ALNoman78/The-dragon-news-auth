import { createBrowserRouter } from "react-router-dom"
import Home from "../Layouts/Home"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
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