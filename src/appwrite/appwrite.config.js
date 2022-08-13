import { Client, Account, Databases, Query } from "appwrite";

const client = new Client();
client
  .setEndpoint("http://localhost:81/v1") // Your API Endpoint
  .setProject("62f6b76c8f27f9984095"); // Your project ID

export const databases = new Databases(client, "62f73a5a1202ee1e4ab1");
export const account = new Account(client);
