"use client";

import {Tabs, Tab, Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import {useState} from "react";
import {StarIcon} from "@heroicons/react/16/solid";
import {CardFooter} from "@nextui-org/card";
import ReviewItem from "@/components/Reviews/ReviewItem";

export default function ProductDetailTab() {
    const [selected, setSelected] = useState("about");

    return <div className="flex w-full flex-col">
            <Tabs
                aria-label="Options"
                selectedKey={selected}
                onSelectionChange={setSelected}
                classNames={{
                    tabList: "flex w-full",
                }}
            >
                <Tab key="about" title="Ürün Hakkında">
                    <Card>
                        <CardBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="detail" title="Detaylar">
                    <Card>
                        <CardBody>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </CardBody>
                    </Card>
                </Tab>
                <Tab key="reviews" title="Değerlendirmeler">
                    <Card>
                        <CardBody>
                            <div className="flex lg:flex-row flex-col">
                                <div className="lg:w-1/2 w-full flex items-center justify-center max-h-unit-9xl lg:shadow-none shadow-lg">
                                    <div className="flex items-center gap-1">
                                        <span className="text-4xl font-bold text-gray-600">4.5</span>
                                        <div className="flex">
                                            <StarIcon className="h-14 w-14 text-yellow-500"/>
                                            <StarIcon className="h-14 w-14 text-yellow-500"/>
                                            <StarIcon className="h-14 w-14 text-yellow-500"/>
                                            <StarIcon className="h-14 w-14 text-yellow-500"/>
                                            <StarIcon className="h-14 w-14 text-yellow-500"/>
                                        </div>
                                        <span className="text-4xl font-bold text-gray-600">(250)</span>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 w-full">
                                    <div className="flex flex-col gap-4 overflow-scroll max-h-unit-8xl">
                                        <ReviewItem />
                                        <ReviewItem />
                                        <ReviewItem />
                                        <ReviewItem />
                                        <ReviewItem />
                                        <ReviewItem />
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Tab>
            </Tabs>
    </div>
}
