"use client"

import React,{useState} from 'react';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
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
import axios from "axios";
import { toast } from 'react-hot-toast';
import {MoonLoader} from "react-spinners"



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

  //state for the loading for the form submission
  const [mailLoader , setMailLoader ] = useState<boolean>(false);


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
  const handleSubmit = async(e: React.FormEvent) =>{
    console.log("buttton clicked")
    setMailLoader(true); //now sending the mail has starter
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

        //if we have errors then we need to stop the loading
        setMailLoader(false);
        toast.error("please fill the form corrrectly ")
        return;
    }

    //if validation passed we neeed to set the errror empty
    setErrors({});
    //adding the api call to send the message 

    try{
        const res  =await axios.post("/api/mail", formData);
        console.log("Response from the server: ", res.data)

        //if the response is anything else than 200 , its a fail for us
        if(res.status != 200){
            toast.error("email send failed due to some error - please send a mail using gmail at the same email address");
            throw new Error("Failed to send Email");
        }
        //this is the success case
        toast.success("Email sent successfully!");
       // alert("email sent successfully")
       //clearing the form data after the successful submisssion
       setFormData({
        name:"",
        email:"",
        subject:"",
        message:""
       })
    }catch(err){
        toast.error("email send failed due to some error - please send a mail using gmail at the same email address");
        console.error(err);
    }
    setMailLoader(false);
    closeModal(); // after the submission is done we can may be close the modal
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Email me!</DialogTitle>
        </DialogHeader>

        {/*putting everthing inside a form for submission */}    
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full Name"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="content">Message</Label>
          <textarea
            id="content"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
            className="min-h-[100px] rounded-md border px-3 py-2 text-sm shadow-sm" // if not styled, add Tailwind here
          />
        </div>
      </div>

      <DialogFooter className="mt-4">
        <DialogClose asChild>
          <Button variant="outline">
            <FcCancel className="m-1" />
          </Button>
        </DialogClose>
        <Button type="submit">
            {mailLoader? (
                <div className='flex items-center justify-center'>
                    <MoonLoader size={15} color={"#4583d5"}/>
                </div>
                
                ) : (
                    <>
                    <BiMailSend className="mr-1" />
                    Send
                    </>
                )}
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>
  )
}