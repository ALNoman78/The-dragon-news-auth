import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { FiBookmark } from 'react-icons/fi';

const NewsCard = ({ news }) => {
    const {
        title,
        thumbnail_url,
        details,
        author = 'NaN',
        total_view,
        rating,
    } = news;

    return (
        <div className="card   rounded-lg p-4 shadow-md">
            {/* Author Section */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold">{author.name}</p>
                        <p className="text-sm text-gray-500">{new Date(author.published_date).toISOString().split('T')[0]}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-500 text-lg">
                    <FiBookmark />
                    <FaShareAlt />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-lg font-bold mb-2">{title}</h2>

            {/* Thumbnail */}
            <figure className="mb-3 ">
                <img src={thumbnail_url} alt="thumbnail" className="rounded-lg md:w-full md:h-[400px] object-cover object-top" />
            </figure>

            {/* Details Preview */}
            <p className="text-sm text-gray-700">
                {details.length > 150 ? details.slice(0, 150) + '...' : details}
                <span className="text-primary font-medium cursor-pointer ml-1">Read More</span>
            </p>

            {/* Footer */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-1 text-warning">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaStar key={i} className={i < Math.round(rating.number) ? 'text-orange-400' : 'text-gray-300'} />
                    ))}
                    <span className="ml-2 text-sm text-gray-700 font-semibold">{rating.number}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;


NewsCard.propTypes = {
    news: PropTypes.object.isRequired,
}
