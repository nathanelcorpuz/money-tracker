import mongoose, { Types } from "mongoose";

const { Schema, model, models } = mongoose;

const sourceSchema = new Schema({
	name: { type: String, required: true },
	userId: { type: Types.ObjectId, required: true, ref: "User" },
	transactionIds: [
		{ type: Types.ObjectId, required: true, ref: "Transaction" },
	],
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

const Source = models.Source || model("Source", sourceSchema);

export default Source;
