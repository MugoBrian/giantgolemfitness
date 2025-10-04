import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

function ContactDialog({ programName, children }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="w-[95vw] sm:w-full sm:max-w-[500px] max-h-[90vh] sm:max-h-[85vh] border-none overflow-hidden bg-white p-0 custom-dialog">
        <div className="overflow-y-auto max-h-[90vh] sm:max-h-[85vh] custom-scrollbar">
          <div className="p-4 sm:p-6">
            <DialogHeader className="space-y-2 sm:space-y-3">
              <DialogTitle className="text-lg sm:text-xl font-bold text-gray-900">
                Contact Trainer
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base text-gray-600">
                Interested in {programName}? Send us a message and we'll get
                back to you.
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 sm:mt-6">
              <ContactForm
                programName={programName}
                subject={`I'm interested in ${programName} Program`}
                onSuccess={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog;
