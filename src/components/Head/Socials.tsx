import Instagram from "@/components/Icons/InstagramIcon";
import Facebook from "@/components/Icons/FacebookIcon";
import Linkedin from "@/components/Icons/LinkedinIcon";
import TwitterIcon from "../Icons/TwitterIcon";

export default function Socials() {
    return (
        <div className="flex items-center md:justify-evenly ml-auto md:w-1/5 w-1/3">
            <a href="https://www.instagram.com/">
                <Instagram className="h-4 w-4 text-white mr-2" />
            </a>
            <a href="https://www.facebook.com/">
                <Facebook className="h-4 w-4 text-white mr-2" />
            </a>
            <a href="https://linkedin.com/">
                <Linkedin className="h-4 w-4 text-white mr-2" />
            </a>
            <a href="">
                <TwitterIcon className="h-4 w-4 text-white mr-2"/>
            </a>
        </div>
    );
}