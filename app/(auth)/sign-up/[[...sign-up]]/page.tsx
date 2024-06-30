import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div className="h-full lg:flex flex-col justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="font-bold text-3xl text-[#2E2A47] pt-8">Welcome Back!!</h1>
          <p className="pb-8  text-[#7E8EA0]">Login Or Create Account to get back to your dashboard.</p>
        </div>
        <div className="flex justify-center text-center">
          <ClerkLoaded>
          <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground"/>
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full lg:bg-slate-600 hidden lg:flex justify-center ">
        <Image alt="application Logo" src='/app_logo.svg' height={100} width={100} />
      </div>
    </div>
  );
}