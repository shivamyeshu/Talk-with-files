"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";

function Dashboard() {

  // logic 
  const { user, isLoaded } = useUser(); // Ensure user is loaded
  const createUser = useMutation(api.user.createUser);

  useEffect(() => {
    if (isLoaded && user?.primaryEmailAddress) {
      console.log("User detected, checking database...");

      CheckUser();
    }
  }, [isLoaded, user]);

  const CheckUser = async () => {
    console.log("Attempting to create user in database...");

    try {
      const result = await createUser({
        email: user?.primaryEmailAddress?.emailAddress,
        image: user?.imageUrl,
        username: user?.fullName,
      });

      console.log("User registration response:", result);
    } catch (error) {
      console.error("Error registering user:", error);
   }
};

return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>Your account is being verified...</p>
    </div>
);
}

export default Dashboard