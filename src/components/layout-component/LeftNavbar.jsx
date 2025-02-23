import { useEffect, useState } from "react";

const LeftNavbar = () => {

    const [category, setCategory] = useState([])
    
    useEffect(
        () => {
            fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
        }, [])
    return (
        <div>
            <h2 className="font-semibold">All Category {category.length}</h2>
            <div className="flex flex-col items-start gap-2 mt-6">
                {
                    category.map((items , idx) => <button className="btn w-full" key={idx} >{items.category_name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;