"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UploadButton } from "@/utils/uploadthing";
import { FormCreateCustomerProps } from "./FormCreateCustomer.type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  country: z.string().min(2),
  website: z.string().min(2),
  phone: z.string().min(6),
  cif: z.string().min(6),
  profileImage: z.string(),
});

export const FormCreateCustomer: React.FC<FormCreateCustomerProps> = ({
  setIsCreateModalOpen,
}) => {
  const [isPhotoUploaded, setIsPhotoUploaded] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      website: "",
      phone: "",
      cif: "",
      profileImage: "",
    },
  });

  const { isValid } = form.formState;

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Acme Corp" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="peru">Perú</SelectItem>
                    <SelectItem value="spain">España</SelectItem>
                    <SelectItem value="united-states">United States</SelectItem>
                    <SelectItem value="portugal">Portugal</SelectItem>
                    <SelectItem value="grecia">Grecia</SelectItem>
                    <SelectItem value="italia">Italia</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website name</FormLabel>
              <FormControl>
                <Input
                  placeholder="e.g., www.example.com"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g., +51 994 449 331"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cif"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CIF</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., B-1234563" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="profileImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Image</FormLabel>
              <FormControl>
                {isPhotoUploaded ? (
                  <p className="text-sm">Image uploaded!</p>
                ) : (
                  <UploadButton
                    className="bg-slate-400/20 text-slate-800 rounded-lg outline outline-2 border-2"
                    {...field}
                    endpoint="profileImage"
                    onClientUploadComplete={(res) => {
                      form.setValue("profileImage", res?.[0].url);
                      toast({
                        title: "Photo uploaded!",
                      });
                      setIsPhotoUploaded(true);
                    }}
                    onUploadError={(error: Error) => {
                      toast({
                        title: "Error uploading photo",
                      });
                    }}
                  />
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!isValid}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
