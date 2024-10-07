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
  // const data = await dbs[dbSelect]
  // const vaultInfo = await (vault(id))
  //Promise all with destructuring
  const [data, vaultInfo] = await Promise.all([dbs[dbSelect], vault(id)])
  const dataObject = {id, ...data, ...vaultInfo}
  console.log(dataObject)
} catch (error) {
  return Promise.reject(error)
}
}
getUserData(4);