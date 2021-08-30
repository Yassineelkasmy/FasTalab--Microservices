import { object, string } from "yup";

export const createUserSchema = object({
    body : object({
        uid : string().required(),
        first_name : string().required(),
        last_name : string().required(),
        phone:string().required(),
    }),
});

export const updateUserSchema = object({
    body : object({
        first_name : string(),
        last_name : string(),
        phone:string(),
       
    }),
});