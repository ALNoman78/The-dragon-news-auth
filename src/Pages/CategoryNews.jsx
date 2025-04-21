import { useLoaderData } from 'react-router-dom'

const CategoryNews = () => {
    const { data } = useLoaderData()
    console.log(data)
    return (
        <div>
            <h3>CategoryNews {data.length}</h3>
        </div>
    )
}

CategoryNews.propTypes = {}

export default CategoryNews