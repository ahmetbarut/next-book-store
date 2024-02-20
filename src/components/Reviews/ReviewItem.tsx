import {CardBody, CardHeader, Divider} from "@nextui-org/react";
import {CardFooter} from "@nextui-org/card";

export default function ReviewItem() {
    return <div className="w-full shadow-lg transition-shadow shadow-black/30 rounded-md">
        <CardHeader>Değerlendirme 1</CardHeader>
        <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
        </CardBody>
        <CardFooter>
            <div className="flex gap-4">
                <span className="text-gray-500">***** *****</span>
                <Divider orientation="vertical"/>
                <span className="text-gray-500">12.12.2021</span>
            </div>
        </CardFooter>
    </div>;
}