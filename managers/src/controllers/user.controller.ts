import { Request, Response } from "express";
import { createUser, findAndUpdate, findUser } from "../services/user.service";
import log from "@fastalab/common/build/logger";
import { get, omit} from "lodash";

export async function createUserHandler(req: Request, res: Response){
    let uid = get(req.body , "uid");

    //TODO : Check the given uid if it exists in the Firebase users collection

    try {

        const user = await createUser(req.body);
        return res.send(user.toJSON());

    }catch(e) {

        log.error(e);
        return res.status(409).send();
    }
}

export async function getUserHandler(req: Request , res:Response) {
    
    let uid = get(req ,"uid");
    console.log(uid);

    const user = await findUser({uid});

    if(!user) {
        return res.status(404).send();
    }
    
    return res.send(user);

}

export async function updateUserHandler(req: Request, res: Response) {
   
    let uid = get(req ,"uid");

    //Very important security check
    const update = omit(req.body, "uid","disabled","verified");

    // setting new to true will return the document after the update is applied
    const user = await findAndUpdate({uid}, update, {new:true});

    if(!user){
        return res.sendStatus(404); 
    }
    
    return res.send(user);
}