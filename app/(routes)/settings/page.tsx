import { UserProfile } from "@clerk/nextjs";
import React from "react";

export default function SettingPage() {
  return (
    <div className="container w-full">
      <UserProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "100%",
              // height: '80vh',
            },
          },
        }}
      />
    </div>
  );
}
