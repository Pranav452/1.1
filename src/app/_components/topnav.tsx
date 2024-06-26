"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-bold  ">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold ">Timeless</p>
      
        <p className="text-3xl font-bold"> Treasures</p>
      
        <SignedOut>
          <SignInButton />
              
        
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
