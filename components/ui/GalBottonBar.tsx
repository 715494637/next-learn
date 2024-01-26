"use client";


// import { ZCOOL_KuaiLe } from 'next/font/google'
// const zcool = ZCOOL_KuaiLe({
//     weight: '400',
//     subsets: ['latin'],
//     display: 'swap',
// })
// className = { zcool.className }

import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, } from "@nextui-org/react";


export default function GalBottonBar() {

    return (
            <div className="flex gap-4 ">
                <GalDropdown />
            </div>
    )


}


function GalDropdown() {
    return (
        <Dropdown className="font-zcool">
            <DropdownTrigger>
                    <Button className="bg-[#c497ff] text-white text-2xs font-bold " variant="ghost" >
                        Select
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Link Actions">
                    <DropdownItem key="home" href="/home">
                        Home
                    </DropdownItem>
                    <DropdownItem key="about" href="/about">
                        About
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
    )
}