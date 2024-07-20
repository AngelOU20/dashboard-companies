"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { ModalAddEventProps } from "./ModalAddEvent.type";
import { FormEvent } from "../FormEvent";

export const ModalAddEvent: React.FC<ModalAddEventProps> = ({
  isOpen,
  setIsOpen,
  setOnSaveNewEvent,
  companies,
  setNewEvent,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new event</DialogTitle>
        </DialogHeader>
        <FormEvent
          setIsOpen={setIsOpen}
          companies={companies}
          setNewEvent={setNewEvent}
          setOnSaveNewEvent={setOnSaveNewEvent}
        />
      </DialogContent>
    </Dialog>
  );
};
