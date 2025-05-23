import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {

    const [category, setCategory] = useState([])
    // here i set some API 
    useEffect(
        () => {
            fetch('https://openapi.programming-hero.com/api/news/categories')
                .then(res => res.json())
                .then(data => setCategory(data.data.news_category))
        }, [])
    return (
        <div>
            <h2 className="font-semibold mx-3">All Category {category.length}</h2>
            <div className="flex flex-col items-start gap-2 mt-6 md:mx-0 mx-3 ">
                {
                    category.map((category, idx) => <NavLink to={`/category/${ category.category_id}`} className="btn w-full"
                        key={idx} >
                        {category.category_name}</NavLink >)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;