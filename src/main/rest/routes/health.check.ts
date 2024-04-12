import { Router } from "express";

export default (router: Router): void => {
    router.get("/health-check", (req, res) => {
        res.send({ ok: true });
    });

};