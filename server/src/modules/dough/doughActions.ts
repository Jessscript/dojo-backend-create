import type { RequestHandler } from "express";

// Import access to data
import doughRepository from "./doughRepository";

// The B of BREAD - Browse (Read All) operation

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the item data from the request body
    const newDough = {
      name: req.body.name,
      quantity: req.body.quantity,
    };

    // Create the item
    const insertId = await doughRepository.create(newDough);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { add };
