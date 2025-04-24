import { useLoaderData } from 'react-router-dom'
import NewsCard from './NewsCard'

const CategoryNews = () => {
    const { data :news } = useLoaderData()
    console.log(news)
    return (
        <div>
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