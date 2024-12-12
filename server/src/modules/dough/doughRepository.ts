import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Dough = {
  id: number;
  name: string;
  quantity: number;
};

class DoughRepository {
  // The C of CRUD - Create operation

  async create(dough: Omit<Dough, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into dough (name, quantity) values (?, ?)",
      [dough.name, dough.quantity],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }
}

export default new DoughRepository();
