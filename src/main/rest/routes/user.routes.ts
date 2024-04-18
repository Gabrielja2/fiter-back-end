import { Router } from "express";
import { RestAdapter } from "@/main/rest/adapter";
import { createUserController, loginUserController } from "@/main/factories";

export default (router: Router): void => {
    router.post("/users/register", RestAdapter.route(createUserController));
    router.post("/users/login", RestAdapter.route(loginUserController));
}