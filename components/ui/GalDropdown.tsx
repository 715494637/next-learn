"use client";

import { Dropdown, DropdownTrigger, Button, DropdownMenu, DropdownItem, Image, Avatar } from "@nextui-org/react";

export default function GalDropdown() {
    return (
        <Dropdown className="">
            <DropdownTrigger>
                <Button variant="ghost">
                    <Avatar name='Yuzusoft' src='/yuzusoft.png' />
                    Open Menu
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