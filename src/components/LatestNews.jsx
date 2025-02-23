import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom"

const LatestNews = () => {
    return (
        <div className="bg-base-200 p-4 gap-5 flex items-center">
            <p className="px-5 py-1 font-medium bg-pink-500 text-lg text-white">Latest</p>
            <Marquee pauseOnHover={true}  className="space-x-10">
                <Link to='news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam dolores laborum sunt libero officia.</Link>
                <Link to='news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam dolores laborum sunt libero officia.</Link>
                <Link to='news'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam dolores laborum sunt libero officia.</Link>
            </Marquee>
        </div>
    )
}

LatestNews.propTypes = {}

export default LatestNews