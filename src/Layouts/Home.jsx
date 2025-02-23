import Header from "../components/Header"
import LatestNews from "../components/LatestNews"
import LeftNavbar from "../components/layout-component/LeftNavbar"
import Navbar from "../components/Navbar"

const Home = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="md:w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="md:w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <main className="md:w-11/12 mx-auto pt-6 md:grid grid-cols-12 gap-3">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3">Right content</aside>
            </main>
        </div>
    )
}

Home.propTypes = {}

export default Home