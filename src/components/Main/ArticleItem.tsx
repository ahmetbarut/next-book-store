"use client";

import ArticleItemType from "@/app/types/ArticleItem";
import Image from "next/image";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import Instagram from "../Icons/InstagramIcon";

export default function ArticleItem({ article }: { article: ArticleItemType }) {

    const checkIsMobile = () => {
        if (typeof window === "undefined") return false;
        return window ? window.innerWidth < 768 : false;

    }

    const getResponsiveClass = (): string => {
        if (checkIsMobile()) {
            return "20";
        }
        return "20";
    }

    return (
        <div className="flex gap-3 flex-col w-full">
            <Image src={article.image} alt="img" width={1000} height={1000} className="h-64 w-full object-center" />
            <span className="text-xs text-primary-500/80">
                01.01.2021
            </span>
            <h2 className="font-light text-primary-900">
                {article.title}
            </h2>
            <hr />
            <div className="flex justify-end">
                <div className="md:w-1/6 w-1/4 md:gap-0 gap-3 flex justify-between">
                    <FacebookIcon fill="#393280" height={getResponsiveClass()} width={getResponsiveClass()} />
                    <TwitterIcon fill="#393280" height={getResponsiveClass()} width={getResponsiveClass()} />
                    <Instagram fill="#393280" height={getResponsiveClass()} width={getResponsiveClass()} />
                </div>
            </div>
        </div>
    )
};
