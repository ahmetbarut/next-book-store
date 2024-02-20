import ProductItem from "../Product/ProductItem";
import ArticleItem from "./ArticleItem";

export default function Articles() {
    const articles = [
        {
            id: 1,
            image: "/images/article.jpg",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            slug: "lorem-ipsum-dolor",
        },
        {
            id: 2,
            image: "/images/article.jpg",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            slug: "lorem-ipsum-dolor",
        },
        {
            id: 3,
            image: "/images/article.jpg",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            slug: "lorem-ipsum-dolor",
        },
        {
            id: 4,
            image: "/images/article.jpg",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            slug: "lorem-ipsum-dolor",
        }
    ]
    
    return (
        <div className="bg-white mx-auto w-11/12 divide-y mb-4 flex flex-col justify-between">
            <div className="w-full mx-auto flex flex-col">
                <h3 className="text-center uppercase text-zinc-400 text-xs">
                    Read Our Articles
                </h3>
                <div className="flex md:items-center">
                    <div className="h-px bg-gray-300 flex-1 mr-3 hidden md:block"></div>
                    <div className="text-primary w-full md:w-auto md:text-4xl text-2xl text-center md:text-left font-bold uppercase">New Relase Books</div>
                    <div className="h-px bg-gray-300 flex-1 ml-3 hidden md:block"></div>
                </div>
                {/* Articles */}
                <div className="mb-4">
                    <div className="grid md:grid-cols-4 grid-flow-row gap-4 mt-12">
                        {articles.map((article) => (
                            <ArticleItem article={article}  key={article.id + Math.random()}/>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <button className="uppercase bg-transparent text-primary-900 border border-primary-900/70 md:w-2/12 w-full text-sm font-light py-2 px-4 rounded-sm">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
}