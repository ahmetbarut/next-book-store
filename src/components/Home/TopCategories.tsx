import Image from 'next/image'

export default function TopCategories() {
    const images = [
        '/images/category-1.jpg',
        '/images/category-2.jpg',
        '/images/category-3.jpg',
        '/images/category-4.jpg',
        '/images/category-5.jpg',
    ];

    return (
        <div className="bg-white">
            <div className="mt-12 w-11/12 mx-auto">
                <div className="grid md:grid-rows-2 w-full md:grid-cols-3 md:grid-flow-col gap-4">
                    <div className="h-64 bg-white md:col-start-2">
                        <div className="flex flex-col items-center h-full justify-evenly">
                            <h1 className="text-3xl font-bold text-primary">
                                Explore Our Top Categories
                            </h1>
                            <button className="bg-primary-500/75 text-white text-lg font-bold hover:bg-primary-500 p-2 hover:transition duration-500">
                                View All
                            </button>
                        </div>
                    </div>
                    {
                        images.map((image, index) => (
                            <div className="h-64 w" key={index + Math.random()}>
                                <Image width={1000} height={1000} className='w-full h-full object-cover' src={image} alt='category-1' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}