import ProductItem from "../Product/ProductItem";

export default function RelatedProducts() {
    return (
        <div className="bg-white mx-auto w-11/12 divide-y mb-4 flex flex-col justify-between">
            <div className="mt-12 w-full mx-auto flex flex-col">
                <h3 className="text-center uppercase text-zinc-400 text-xs">
                    Some Quality Items
                </h3>
                <div className="flex items-center">
                    <div className="h-px bg-gray-300 flex-1 mr-3"></div>
                    <div className="text-primary text-4xl font-bold uppercase">New Relase Books</div>
                    <div className="h-px bg-gray-300 flex-1 ml-3"></div>
                </div>
                {/* Products */}
                <div className="grid grid-cols-4 gap-8 mt-12">
                    <ProductItem image="/images/products/book.jpg" />
                    <ProductItem image="/images/products/book-2.jpg" />
                    <ProductItem image="/images/products/book-3.jpg" />
                    <ProductItem image="/images/products/book-4.jpg" />
                </div>
            </div>
            <div className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore porro odio aut repellendus, molestias voluptates beatae quo ipsa quis obcaecati tenetur cum earum consectetur, atque quam minus temporibus delectus ad.
            </div>
        </div>
    );
}