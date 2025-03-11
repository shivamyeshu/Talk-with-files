"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <>
      <h1>Hello World! This is the home route</h1>
      
      {/* Button to navigate to the Dashboard */}
      <Link href="/dashboard">
        <Button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Go to Dashboard
        </Button>
      </Link>
    </>
  )
}
