"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-bold  ">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold ">Timeless</p>
        <img
          alt=""
          loading="lazy"
          width={15}
          height={15}
          decoding="async"
          data-nimg={1}
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2FFuzzieLogo.png&amp;w=16&amp;q=75 1x, /_next/image?url=%2FFuzzieLogo.png&amp;w=32&amp;q=75 2x"
          src="/_next/image?url=%2FFuzzieLogo.png&amp;w=32&amp;q=75"
        />
        <p className="text-3xl font-bold"> Treasures</p>
      </aside>
      <div className="flex flex-row gap-4 items-center">
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
