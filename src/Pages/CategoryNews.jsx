import { useLoaderData } from 'react-router-dom'
import NewsCard from './NewsCard'

const CategoryNews = () => {
    const { data :news } = useLoaderData()
    console.log(news)
    return (
        <div>
            {/* <h3 className='text-[#706F6F]'>{news.length} News Find in this Category</h3> */}
            <div>
                {
                    news.map((news_update , idx) => <NewsCard key={idx} news={news_update}></NewsCard>) 
                }
            </div>
        </div>
    )
}

CategoryNews.propTypes = {}

export default CategoryNews