"use client"

import React,{useState} from 'react';
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
import {BiMailSend} from "react-icons/bi";
import { FcCancel } from "react-icons/fc";

//work with zod validatation for schema
//defining the shema first using zod
const schemaMail = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().optional(),
    message: z.string().min(20, "mesaage  must be of atleast 20 characters"),
   // attachment: z.instanceof(File).optional()
});

//defining the type for the schema for tyepscript 
type emailSchemaType = z.infer<typeof schemaMail>;



export function MailModal() {
  // Zustand store- using to manage the modal
  const { isOpen, closeModal } = useModalStore();


  //state for the form data
  const [formData , setFormData] = useState<emailSchemaType>({
    name:"",
    email:"",
    subject:"",
    message:""
  })

  //state for the form errors - todo:loook into this more deeply later
  const[errors , setErrors] = useState<Partial<Record<keyof emailSchemaType, string>>>({});

  //hamdling the changing  in the input - we neec to fire up a event handler to handle change 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {name , value } = e.target;
    setFormData((prev) => ({...prev , [name]:value}))
  }

  //handling the form submission - a form event handler
  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();

    //validating the form data using the schema we defined earlier
    const result = schemaMail.safeParse(formData);

    //validation failed
    if(!result.success){
        const feildErrors: typeof errors = {};
        //iterating over the errors and setting them in the state
        const zodError = result.error;
        //zodError.errors is an array of errors, we need to iterate over it        
        zodError.issues .forEach((err :any) => {
            //error.path is an array of strings, we need to join them to get the key
            const key = err.path[0] as keyof  emailSchemaType;
            feildErrors[key] = err.message; //setting the error message
        });
        setErrors(feildErrors);
        return;
    }

    //if validation passed we neeed to set the errror empty
    setErrors({});
    closeModal(); // after the submission is done we can may be close the modal
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Email me!</DialogTitle>
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription> */}
        </DialogHeader>

        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder ="Your full Name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email"  placeholder ="Your email address" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject"  />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="content">Message</Label>
            <textarea id="content"  placeholder = "Type your message here"/>
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">
                <FcCancel className="m-1" />
            </Button>
          </DialogClose>
          <Button type="submit">
            <BiMailSend className="mr-1" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
