// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./src/databases.mjs";



async function getUserData(id) {
  let dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  try {
  
  const dbSelect = await central(id);
  const data = await dbs[dbSelect]
  const vaultInfo = await (vault(id))
  console.log({id, ...data, ...vaultInfo})
} catch (error) {
  return Promise.reject(error)
}
}
getUserData(1);