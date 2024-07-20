"use client";

import React, { useState } from "react";
import { FormEventProps } from "./FormEvent.type";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { formSchema } from "./FormEvent.form";
import { Save } from "lucide-react";

export const FormEvent: React.FC<FormEventProps> = ({
  setIsOpen,
  setOnSaveNewEvent,
  companies,
  setNewEvent,
}) => {
  const [selectedCompany, setSelectedCompany] = useState({
    name: "",
    id: "",
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventName: "",
      companieSelected: {
        name: "",
        id: "",
      },
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setNewEvent(values);
      setIsOpen(false);
      setOnSaveNewEvent(true);
    } catch (error) {
      toast({
        title: "Something went wrong!",
        variant: "destructive",
      });
    }
  };

  const handleCompanyChange = (newValue: string) => {
    const selectedCompany = companies.find(
      (company) => company.name === newValue
    );

    if (selectedCompany) {
      setSelectedCompany({
        name: selectedCompany.name,
        id: selectedCompany.id,
      });

      form.setValue("companieSelected.name", selectedCompany.name);
      form.setValue("companieSelected.id", selectedCompany.id);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid space-y-8">
        <FormField
          control={form.control}
          name="eventName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Event name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Meeting" type="text" {...field} />
              </FormControl>
              <FormDescription>This is your event name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companieSelected.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company name</FormLabel>
              <Select
                onValueChange={(newValue) => {
                  field.onChange(newValue);
                  handleCompanyChange(newValue);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a company" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {companies.map((company) => (
                    <React.Fragment key={company.id}>
                      <SelectItem value={company.name}>
                        {company.name}
                      </SelectItem>
                    </React.Fragment>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          <Save className="w-4 h-4 mr-2" />
          Create event
        </Button>
      </form>
    </Form>
  );
};
