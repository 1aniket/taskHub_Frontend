import z from "zod";


export const signInSchema = z.object({
    email : z.email("Enter Valid Email !"),
    password : z.string().min(8 , "Minimum 8 Charachters required !")
})

export const signUpSchema = z.object({
    email : z.email("Enter Valid Email !"),
    password : z.string().min(8 , "Minimum 8 Charachters required !"),
    name : z.string().min(3 , "Minimum 3 charachters Required !"),
    confirmPassword : z.string().min(8 , "Minimum 8 charachters required !")
}).refine(
    (data)=> data.password === data.confirmPassword, {
        path:["confirmPassword"],
        message : "password do not match !"
    }
);