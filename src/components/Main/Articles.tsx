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
            id: 1,
            image: "/images/article.jpg",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            slug: "lorem-ipsum-dolor",
        },
        {
            id: 1,
            image: "/images/article.jpg",
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            slug: "lorem-ipsum-dolor",
        },
        {
            id: 1,
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
                <div className="flex items-center">
                    <div className="h-px bg-gray-300 flex-1 mr-3"></div>
                    <div className="text-primary text-4xl font-bold uppercase">New Relase Books</div>
                    <div className="h-px bg-gray-300 flex-1 ml-3"></div>
                </div>
                {/* Articles */}
                <div className="mb-4">
                    <div className="grid grid-cols-4 grid-flow-row gap-4 mt-12">
                        {articles.map((article) => (
                            <ArticleItem article={article}  key={article.id}/>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <button className="uppercase bg-transparent text-primary-900 border border-primary-900/70 w-2/12 text-sm font-light py-2 px-4 rounded-sm">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
}