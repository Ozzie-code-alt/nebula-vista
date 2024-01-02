import React from "react";
import Link from "next/link";
import "../../app/globals.css";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full h-auto flex flex-row justify-center items-center text-white">
      <div className="w-full px-10">
        <h1 className="font-bold">Justin Logo Here</h1>
      </div>

      <div className="hidden flex-col w-full justify-center place-items-end pr-10 sm:flex ">
        <div className="header-item ">
          <Link href={"/main"} className="text-2xl font-light italic ">
        Justin Santos
          </Link>
        </div>
        <div className="header-item">
          <Link href={"/about"} className="text-2xl font-light italic">
            Projects
          </Link>
        </div>
        <div className="header-item">
          <Link href={"/contacts"} className="text-2xl font-light italic">
           About
          </Link>
        </div>
      </div>

      <div className="flex sm:hidden mr-10">
        <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
