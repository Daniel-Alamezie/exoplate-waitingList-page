import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { cn } from '@/lib/utils';

export default function ExoplateSpecialOfferDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Find Out More</Button>
      </DialogTrigger>
      <DialogContent className="rounded-lg p-6 bg-white shadow-xl">
        <DialogHeader>
          <DialogTitle>🎁 ✨ Exclusive Launch Offer</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p className={cn('font-medium')}>Join our waiting list now! The first 50 sign-ups receive a custom poster with their chosen art for free at launch. Grab this exclusive offer!</p>
        </DialogDescription>
        <DialogFooter className="flex justify-end gap-4 mt-4">
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
          {/* Optionally, add more actions here */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
