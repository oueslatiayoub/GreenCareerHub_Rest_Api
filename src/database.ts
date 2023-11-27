import { MongoClient, Db } from "mongodb";

export class Database {
  private static mongoClient: MongoClient;

  private constructor() {}

  static async initilize() {
    this.mongoClient = await MongoClient.connect(
        "mongodb+srv://faresmtaallah:Qp3pCGNeynB6K8Lb@cluster0.jmsw8hk.mongodb.net/?retryWrites=true&w=majority"
            );
  }

  static getDb() {
    return this.mongoClient.db();
  }
}
