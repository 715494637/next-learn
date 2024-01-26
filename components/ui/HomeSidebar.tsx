"use client"


import React from "react";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Avatar } from "@nextui-org/react";

 function BarDropdown() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (
        <Dropdown className="flex gap-3 items-center">
            <DropdownTrigger>
                <Button
                
                    variant="bordered"
                    className="capitalize flex gap-5 items-center"
                >
                    <Avatar showFallback src='https://images.unsplash.com/broken' size="sm" />
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys as any}
            >
                <DropdownItem key="text">Text</DropdownItem>
                <DropdownItem key="number">Number</DropdownItem>
                <DropdownItem key="date">Date</DropdownItem>
                <DropdownItem key="single_date">Single Date</DropdownItem>
                <DropdownItem key="iteration">Iteration</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}


export default function HomeSidebar() {
    
    return (
        <div className="flex flex-col w-[12%] h-full fixed ">
            <BarDropdown />
        </div>
    )

}