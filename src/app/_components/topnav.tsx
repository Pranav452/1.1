"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-bold  ">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold ">Timeless</p>
      
        <p className="text-3xl font-bold"> Treasures</p>
      </aside>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
         // <div className="flex flex-row gap-2">
            //<aside className="flex items-center gap-4">
              //<div className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                //<span className="absolute inset-0 animate-spin bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></span>
                //<button className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-800 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <SignInButton />
                //</button>
              //</div>
              
            </aside>
          </div>
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
