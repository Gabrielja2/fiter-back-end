import { Router } from "express";
import { RestAdapter } from "../adapter";
import {
    authenticateUserMiddleware,
    createTicketConfigController,
    findTicketConfigController,
} from "@/main/factories";

export default (router: Router): void => {

    router.post("/ticket-config/register", RestAdapter.middleware(authenticateUserMiddleware), RestAdapter.route(createTicketConfigController));
    router.get("/ticket-config", RestAdapter.middleware(authenticateUserMiddleware), RestAdapter.route(findTicketConfigController));
}