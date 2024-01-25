"use client";

import { Image } from "@nextui-org/react";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../Acermity/3d-card";

const Image_list = [
    {
        name: "白雪乃爱",
        introduce: "乃爱好可爱啊啊啊啊",
        src:"nai.png"
    },
    {
        name: "幼刀丛雨",
        introduce: "丛雨好可爱啊啊啊啊",
        src:"congyu.png"
    }
]

export default function Galgame() {
    return (
        <div className="flex justify-center min-h-screen  opacity-50 gap-5">
            {
                Image_list.map((i) => (<CardContainer className="inter-varn " key={i.introduce}>
                    <CardBody className="bg-gray-50 relative group/card   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                            {i.name}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className=" text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            {i.introduce}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4 flex justify-center">
                            <Image
                                src={i.src}
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>)

                )
            }
        </div>


    )
}