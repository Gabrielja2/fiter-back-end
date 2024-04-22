import { Router } from "express";
import { RestAdapter } from "@/main/rest/adapter";
import { registerPrizeDrawController, authenticateUserMiddleware } from "@/main/factories";


export default (router: Router): void => {
    router.post("/prize-draw/register", RestAdapter.middleware(authenticateUserMiddleware), RestAdapter.route(registerPrizeDrawController));
}