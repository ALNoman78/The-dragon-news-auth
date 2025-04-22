import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import LatestNews from "../components/LatestNews"
import LeftNavbar from "../components/layout-component/LeftNavbar"
import RightNav from "../components/layout-component/RightNav"
import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <div className="font-poppins">
            {/* header section added */}
            <header>
                <Header></Header>
                {/* news marquee section added */}
                <section className="md:w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            {/* navbar added */}
            <nav className="md:w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <main className="md:w-11/12 mx-auto pt-6 md:grid grid-cols-12 gap-3">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6 font-medium">
                    <h3 className="mb-5">Dragon News Content</h3>
                    <Outlet></Outlet>
                </section>

                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    )
}

Home.propTypes = {}

export default Home