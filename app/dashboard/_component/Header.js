import { UserButton } from "@clerk/nextjs";
import React from "react";

function Header() {
  return (
    <div className="flex justify-end p-2.5 shadow-sm">
      {/* Wrapper div to control size */}
      <div className="transform scale-145 mr-2 mt-1">
          <UserButton />
       </div>
    </div>
  );
}

export default Header;
