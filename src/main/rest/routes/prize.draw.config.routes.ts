import { Router } from "express";
import { RestAdapter } from "../adapter";
import {
    authenticateUserMiddleware,
    createPrizeDrawConfigController,
    findPrizeDrawConfigController,
} from "@/main/factories";

export default (router: Router): void => {

    router.post("/prize-draw-config/register", RestAdapter.middleware(authenticateUserMiddleware), RestAdapter.route(createPrizeDrawConfigController));
    router.get("/prize-draw-config", RestAdapter.middleware(authenticateUserMiddleware), RestAdapter.route(findPrizeDrawConfigController));
}