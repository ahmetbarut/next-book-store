import Image from "next/image";
import ProductItem from "../Product/ProductItem";

export default function RelatedProducts() {
    return (
        <div className="bg-white mx-auto w-11/12 divide-y mb-4 flex flex-col justify-between">
            <div className="mt-12 w-full mx-auto flex flex-col gap-4 md:gap-0">
                <h3 className="text-center uppercase text-zinc-400 md:text-xs text-base">
                    Some Quality Items
                </h3>
                <div className="md:flex md:items-center">
                    <div className="h-px hidden md:block bg-gray-300 flex-1 mr-3"></div>
                    <div className="text-primary md:text-4xl text-2xl text-center md:text-left font-bold uppercase">New Relase Books</div>
                    <div className="h-px hidden md:block bg-gray-300 flex-1 ml-3"></div>
                </div>
                {/* Page */}
                <div className="grid md:grid-cols-4 gap-8 mt-12">
                    <ProductItem image="/images/products/book.jpg" />
                    <ProductItem image="/images/products/book-2.jpg" />
                    <ProductItem image="/images/products/book-3.jpg" />
                    <ProductItem image="/images/products/book-4.jpg" />
                </div>
            </div>
            <div className="md:my-5 flex md:justify-center md:items-center bg-gradient-to-l mt-3 md:mt-0 from-white to-[#FFE5E5] h-[100vh] via-[#F5FFFE]">
                <div className="md:h-5/6 md:w-5/6 w-full flex md:flex-row flex-col md:justify-between">
                    <Image src='/images/products/book-4.jpg' alt="img" className="md:h-full h-1/2 md:w-1/2 w-full object-contain" width={1000} height={1000} />
                    <div className="h-full md:w-1/2 w-full md:mt-0 mt-5 flex flex-col items-center md:justify-between">
                        <div className="flex flex-col gap-5 md:gap-0 p-5 md:p-0 justify-evenly h-3/4">
                            <h1 className="text-primary md:text-left text-center text-3xl font-semibold">
                                Featured Book
                            </h1>
                            <div className="w-1/5 hidden md:block bg-primary-500 h-[2px]"></div>
                            <h1 className="uppercase text-xs -mt-2 md:text-left text-center text-gray-400">
                                Ahmet Barut
                            </h1>
                            <h1 className="text-primary text-xl font-semibold md:text-left text-center">
                                Birds gonna be happy
                            </h1>
                            <p className="md:w-2/3 text-sm text-gray-400 md:text-left text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aperiam doloribus tempore voluptas
                            </p>
                            <span className="font-bold text-lg text-primary-500/100 md:text-left text-center">
                                $ 19.99
                            </span>
                        </div>
                        <button className="md:w-1/3 w-11/12 bg-transparent border-primary-700 border p-2 rounded-md text-primary-700">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}