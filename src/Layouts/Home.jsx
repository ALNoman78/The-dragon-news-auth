import Header from "../components/Header"
import LatestNews from "../components/LatestNews"

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="md:w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>

            </nav>
        </div>
    )
}

Home.propTypes = {}

export default Home