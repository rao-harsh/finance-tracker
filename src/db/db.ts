import mongoose from "mongoose";

export class MongoConnect {
    static connect(uri: string) {
        mongoose.connect(uri)
        this.printConnect();
    }
    static printConnect() {
        const db = mongoose.connection;
        db.once("open", () => console.log("Connected to MongoDB"));
    }
}

