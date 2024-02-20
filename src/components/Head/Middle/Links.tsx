import CartIcon from "@/components/Icons/CartIcon";
import HeartIcon from "@/components/Icons/HeartIcon";
import UserIcon from "@/components/Icons/UserIcon";
import Link from "next/link";

export default function Links({ className }: { className?: string }) {
    return (
        <div className={className}>
            <a href="#" className="flex items-center font-medium text-primary justify-center text-center w-1/3">
                <span className="mr-2">
                    <UserIcon className="h-4 w-4" />
                </span>
                <span className="md:uppercase">
                    Account
                </span>
            </a>
            <a href="#" className="flex items-center font-medium text-primary justify-center text-center w-1/3">
                <span className="mr-2">
                    <CartIcon className="h-4 w-4" />
                </span>
                <span className="md:uppercase">
                    Cart
                </span>
            </a>
            <a href="#" className="flex items-center font-medium text-primary justify-center text-center w-1/3">
                <span className="mr-2">
                    <HeartIcon className="h-4 w-4" />
                </span>
                <span className="md:uppercase">
                    Wishlist
                </span>
            </a>
        </div>
    );
}