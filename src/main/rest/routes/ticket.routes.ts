import { Router } from "express";
import { RestAdapter } from "@/main/rest/adapter";
import { registerTicketController, authenticateUserMiddleware } from "@/main/factories";


export default (router: Router): void => {
    router.post("/tickets/register", RestAdapter.route(registerTicketController));
}