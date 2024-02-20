'use client'
import { useState } from 'react'
import SliderItem from './SliderItem'
import CustomPagingSlider from './CustomPagingSlider'

export default function Slider() {
    const [active, setActive] = useState(0)
    const [sliding, setSliding] = useState(false)

    const sliders = [
        {
            id: 1,
            title: 'İpsum dolor Sit 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis voluptatem atque qui quod. Architecto eius, excepturi possimus labore consequatur aspernatur dolore optio laborum voluptates suscipit officiis illum aliquam omnis?',
            image: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg'
        },
        {
            id: 2,
            title: 'İpsum dolor Sit 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis voluptatem atque qui quod. Architecto eius, excepturi possimus labore consequatur aspernatur dolore optio laborum voluptates suscipit officiis illum aliquam omnis?',
            image: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg'
        },
        {
            id: 3,
            title: 'İpsum dolor Sit 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis voluptatem atque qui quod. Architecto eius, excepturi possimus labore consequatur aspernatur dolore optio laborum voluptates suscipit officiis illum aliquam omnis?',
            image: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg'
        },
        {
            id: 4,
            title: 'İpsum dolor Sit 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis voluptatem atque qui quod. Architecto eius, excepturi possimus labore consequatur aspernatur dolore optio laborum voluptates suscipit officiis illum aliquam omnis?',
            image: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg'
        }
    ];

    const goSlide = (index: number) => ():void => {
        if (sliding) return
        setSliding(true)
        setActive(index)
        setTimeout((): void => {
            setSliding(false)
        }, 500)
    }


    return (
        <div className="w-full mt-8 h-96">
            <div className="w-full mx-auto flex flex-col">
                <CustomPagingSlider
                    imageStyle="h-96"
                    sliders={sliders.map((item) => item.image)}/>
                {/*<div className="flex md:w-16 w-full justify-between md:-mt-7 mt-5 mb-6 ml-2">
                    {
                        sliders.map((slider, index) => (
                            <button key={index + slider.id} onClick={goSlide(index)} className={(active === index) ? 'p-2 rounded-full active-slider ' : 'p-2 rounded-full'}>
                                <div className="bg-gray-500 rounded-full w-3 h-3 transition duration-150 ease-in-out"></div>
                            </button>
                        ))
                    }
                </div>*/}
            </div>
        </div>
    )
}