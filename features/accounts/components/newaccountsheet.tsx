import {
  SheetContent,
  SheetHeader,
  Sheet,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import useOpenNewAccount from "../hooks/useOpenNewAccount";

const NewAccountSheet = () => {
  const { isOpen, closeSheet } = useOpenNewAccount()
  return (
    <Sheet open={isOpen} onOpenChange={closeSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>New Account</SheetTitle>
          <SheetDescription>
            Create a new account to track your transactions.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default NewAccountSheet;
