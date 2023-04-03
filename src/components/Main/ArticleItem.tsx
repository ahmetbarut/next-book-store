import ArticleItemType from "@/app/types/ArticleItem";
import Image from "next/image";
import FacebookIcon from "../Icons/FacebookIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import Instagram from "../Icons/InstagramIcon";

export default function ArticleItem({ article }: { article: ArticleItemType }) {
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
                <div className="w-1/6 flex justify-between">
                    <FacebookIcon fill="#393280" height="10" width="10" />
                    <TwitterIcon fill="#393280" height="10" width="10" />
                    <Instagram fill="#393280" height="10" width="10" />
                </div>
            </div>
        </div>
    )
};
