import { Router } from "express";
import { RestAdapter } from "@/main/rest/adapter";
import { createPrizeDrawController, authenticateUserMiddleware } from "@/main/factories";


export default (router: Router): void => {
    router.post("/prize-draw-result", RestAdapter.middleware(authenticateUserMiddleware), RestAdapter.route(createPrizeDrawController));
}