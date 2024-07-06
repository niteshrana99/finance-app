"use client";

import { Button } from "@/components/ui/button";
import useOpenNewAccount from "@/features/accounts/hooks/useOpenNewAccount";

export default function Home() {
    const { openSheet } = useOpenNewAccount();
 return (
  <p>
    This is an authenticated Route
    <Button onClick={openSheet}>Open New Account</Button>
    </p>
 )
}
