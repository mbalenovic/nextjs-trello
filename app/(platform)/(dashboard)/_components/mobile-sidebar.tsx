"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  const { onOpen, onClose, isOpen } = useMobileSidebar((state) => state);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        onClick={onOpen}
        variant="ghost"
        size="sm"
        className="block md:hidden"
      >
        <Menu className="h-4 w-4" />
        <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent side="left" className="p-2 pt-10">
            <Sidebar storageKey="t-sidebar-mobile-state" />
          </SheetContent>
        </Sheet>
      </Button>
    </>
  );
};
