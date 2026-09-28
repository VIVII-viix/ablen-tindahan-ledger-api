import "dotenv/config";
import { db } from "./index";
import { customers } from "./schema";

async function seed() {
  await db
    .insert(customers)
    .values([
      { id: "c1", name: "Harvey Tyson", balance: 340, lastPaid: "Sep 9" },
      { id: "c2", name: "Noah Lonoy", balance: 1250.5, lastPaid: "Aug 30" },
      { id: "c3", name: "James Inopia", balance: 0, lastPaid: "Sep 12" },
      { id: "c4", name: "Christine Arenal", balance: 520, lastPaid: "Jun 27" },
    ])
    .onConflictDoNothing();
  console.log("Seeded customers");
  process.exit(0);
}
seed();
