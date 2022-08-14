import { Client, Databases, Account } from "appwrite";
import { config as Server } from "./appwrite.config";
const client = new Client();
client
  .setEndpoint(Server.END_POINT) // Your API Endpoint
  .setProject(Server.PROJECT_ID); // Your project ID

export const databases = new Databases(client, Server.DATABASE_ID);
export const account = new Account(client);

// let api = {
//   sdk: null,

//   provider: () => {
//     if (api.sdk) {
//       return api.sdk;
//     }
//     let client = new Client();
//     client.setEndpoint(Server.endpoint).setProject(Server.project);
//     const account = new Account(client);
//     const database = new Databases(client, Server.databaseID);

//     api.sdk = { database, account };
//     return client;
//   },

//   createAccount: (email, password, name) => {
//     return api.provider().account.create("unique()", email, password, name);
//   },

//   getAccount: () => {
//     return api.provider().account.get();
//   },

//   createSession: (email, password) => {
//     return api.provider().account.createEmailSession(email, password);
//   },

//   deleteCurrentSession: () => {
//     return api.provider().account.deleteSession("current");
//   },

//   createDocument: (collectionId, data, read, write) => {
//     return api
//       .provider()
//       .database.createDocument(collectionId, "unique()", data, read, write);
//   },

//   listDocuments: (collectionId) => {
//     return api.provider().database.listDocuments(collectionId);
//   },

//   updateDocument: (collectionId, documentId, data, read, write) => {
//     return api
//       .provider()
//       .database.updateDocument(collectionId, documentId, data, read, write);
//   },

//   deleteDocument: (collectionId, documentId) => {
//     return api.provider().database.deleteDocument(collectionId, documentId);
//   },
// };

// export default api;
