import Menu from "./Menu";
import MiddleHeader from "./Middle/MiddleHeader";
import Phone from "./Phone";
import Socials from "./Socials";

export default function Header() {
    return (
        <header className="w-full flex flex-col">
            <div className="w-full bg-primary h-10">
                <div className="flex w-11/12 mx-auto items-center justify-between h-full">
                    <Phone />
                    <Socials />
                </div>
            </div>
            <div className="mt-2 w-11/12 mx-auto">
                <MiddleHeader />
                <hr className="mt-4"/>
            </div>
            <div className="mt-5 w-full">
                <Menu />
            </div>
        </header >
    );
}