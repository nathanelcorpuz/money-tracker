import mongoose, { Types } from "mongoose";

const { Schema, model, models } = mongoose;

const transactionSchema = new Schema({
	userId: { type: Types.ObjectId, required: true, ref: "User" },
	name: { type: String, required: true },
	date: { type: String, required: true },
	sourceId: { type: Types.ObjectId, required: true, ref: "Source" },
	amount: { type: Number, required: true },
	isCredit: { type: Boolean, default: false },
	isDeleted: { type: Boolean, default: false },
	dateCreated: { type: Date, default: Date.now },
});

const Transaction =
	models.Transaction || model("Transaction", transactionSchema);

export default Transaction;
