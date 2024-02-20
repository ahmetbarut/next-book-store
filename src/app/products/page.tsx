import FilterItems from "@/components/Products/FilterItems";
import ProductItem from "@/components/Product/ProductItem";
import {useState} from "react";

export default function Page() {

    return <div
        className="w-full h-full flex flex-col md:flex-row gap-2 m-2 bg-white">
        <FilterItems/>
        <div className="w-full flex h-full flex-col border">
            <div className="w-full bg-blue-100 p-2">
                <h1 className="text-2xl font-semibold">Ürünler</h1>
            </div>
            <div className="w-full grid md:grid-cols-3 gap-2 grid-cols-2">
                <ProductItem image="/images/products/book.jpg" />
                <ProductItem image="/images/products/book-2.jpg" />
                <ProductItem image="/images/products/book-3.jpg" />
                <ProductItem image="/images/products/book-3.jpg" />
                <ProductItem image="/images/products/book-3.jpg" />
                <ProductItem image="/images/products/book-3.jpg" />
                <ProductItem image="/images/products/book-3.jpg" />
                <ProductItem image="/images/products/book-3.jpg" />
                <ProductItem image="/images/products/book-3.jpg" />
                <ProductItem image="/images/products/book-4.jpg" />
            </div>
        </div>
    </div>;
}