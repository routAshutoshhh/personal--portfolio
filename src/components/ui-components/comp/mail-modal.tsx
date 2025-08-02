"use client"

import React from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useModalStore } from "@/stores/modalStore"
import {z} from "zod";

export function MailModal() {
  // Zustand store
  const { isOpen, closeModal } = useModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Email me!</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription> */}
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" name="name" placeholder ="Your full Name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username-1">Email</Label>
            <Input id="username-1"  placeholder ="Your email address" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username-1">Subject</Label>
            <Input id="username-3"  />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username-1">Message</Label>
            <textarea id="username-1" name="message-content" />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
