import Image from "next/image";
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
            <div className="my-5 flex justify-center items-center bg-gradient-to-l from-white to-[#FFE5E5] h-[100vh] via-[#F5FFFE]">
                <div className="h-5/6 w-5/6 flex flex-row justify-between">
                    <Image src='/images/products/book-4.jpg' alt="img" className="h-full w-1/2 object-contain" width={1000} height={1000} />
                    <div className="h-full w-1/2 flex flex-col justify-between">
                        <div className="flex flex-col justify-evenly h-3/4">
                            <h1 className="text-primary text-3xl font-semibold">
                                Featured Book
                            </h1>
                            <div className="w-1/5 bg-primary-500 h-[2px]"></div>
                            <h1 className="uppercase text-xs -mt-2 text-gray-400">
                                Ahmet Barut
                            </h1>
                            <h1 className="text-primary text-xl font-semibold">
                                Birds gonna be happy
                            </h1>
                            <p className="w-2/3 text-sm text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam doloribus tempore voluptas
                            </p>
                            <span className="font-bold text-lg text-primary-500/100">
                                $ 19.99
                            </span>
                        </div>
                        <button className="w-1/3 bg-transparent border-primary-700 border p-2 rounded-md text-primary-700">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}