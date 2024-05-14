import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { axiosClient } from '../../../api/axios'
const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password:z.string().min(8).max(64)
})
export default function StagiareLogin() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })
     
      // 2. Define a submit handler.
      const onSubmit=async(values) =>{
        await axiosClient.get('/sanctum/csrf-cookie',)
        const data = await axiosClient.post('/login',values)
        console.log(data)
      }
    
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8" >
      
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
          
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password"  placeholder="shadcn" {...field}/>
            </FormControl>
            
            <FormMessage />
          </FormItem>
          
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}
