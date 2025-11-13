import z from "zod";


export const signInSchema = z.object({
    email : z.email("Enter Valid Email !"),
    password : z.string().min(8 , "Minimum 8 Charachters required !")
})