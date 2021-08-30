import { Express, Request, Response } from "express";
import { requiresUser, validateRequest } from "@fastalab/common";
import { createUserHandler, getUserHandler, updateUserHandler } from "./controllers/user.controller";
import { createUserSchema, updateUserSchema } from "./schemas/user.schema";


export default function (app: Express) {
  
  app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

  app.post("/users",
    [requiresUser,validateRequest(createUserSchema)],
    createUserHandler
  );

  app.get("/users/",requiresUser,getUserHandler);
  
  app.put("/users/",
    [requiresUser,validateRequest(updateUserSchema)],
    updateUserHandler
  );
  
}
