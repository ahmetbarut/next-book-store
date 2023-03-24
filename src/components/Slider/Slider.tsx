'use client'
import { useState } from 'react'
import SliderItem from './SliderItem'

export default function Slider() {
    const [active, setActive] = useState(0)
    const [sliding, setSliding] = useState(false)

    const sliders = [
        {
            title: 'İpsum dolor Sit 1',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis voluptatem atque qui quod. Architecto eius, excepturi possimus labore consequatur aspernatur dolore optio laborum voluptates suscipit officiis illum aliquam omnis?',
            image: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg'
        },
        {
            title: 'İpsum dolor Sit 2',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis voluptatem atque qui quod. Architecto eius, excepturi possimus labore consequatur aspernatur dolore optio laborum voluptates suscipit officiis illum aliquam omnis?',
            image: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg'
        },
        {
            title: 'İpsum dolor Sit 3',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum officiis voluptatem atque qui quod. Architecto eius, excepturi possimus labore consequatur aspernatur dolore optio laborum voluptates suscipit officiis illum aliquam omnis?',
            image: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg'
        }
    ];

    const goSlide = (index: number) => () => {
        if (sliding) return
        setSliding(true)
        setActive(index)
        setTimeout(() => {
            setSliding(false)
        }, 500)
    }


    return (
        <div className="w-full mt-8 bg-gradient-to-b from-white to-[#FFE5E5] via-[#F5FFFE]">
            <div className="w-11/12 mx-auto flex flex-col">
                {
                    sliders.map((slider, index) => (
                        <SliderItem
                            className={'w-full items-center ' + (active == index ? 'flex flex-row' : 'hidden') + (sliding ? ' transition duration-500 ease-in-out' : '')}
                            key={index}
                            slider={slider}
                            active={active === index}
                            index={index}
                        />
                    ))
                }
                <div className="flex w-16 justify-between -mt-7 mb-6 ml-2">
                    {
                        sliders.map((slider, index) => (
                            <button key={index} onClick={goSlide(index)} className={(active === index) ? 'p-2 rounded-full active-slider ' : 'p-2 rounded-full'}>
                                <div className="bg-gray-500 rounded-full w-3 h-3 transition duration-150 ease-in-out"></div>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}