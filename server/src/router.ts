import express from "express";
import doughActions from "./modules/dough/doughActions";
const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// import itemActions from "./modules/item/itemActions";

router.post("/api/dough", doughActions.add);
//  router.get("/api/items/:id", itemActions.read);

// Define item-related routes

/* ************************************************************************* */

export default router;
