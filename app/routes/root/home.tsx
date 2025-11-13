import { Button } from "@/components/ui/button";
import type { Route } from "../+types/home";
import Dashboard from "../dashboard/Dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskHub" },
    { name: "Be Organize", content: "Welcome to TaskHub!" },
  ];
}

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center gap-4 items-center">
      <Link to="/signin">
        <Button className="text-xl bg-blue-500 px-3 py-6">Sign In</Button>
      </Link>
       <Link to="/signup">
        <Button className="text-xl bg-blue-500 px-3 py-6">Sign Up</Button>
      </Link>
    </div>
  );
}
