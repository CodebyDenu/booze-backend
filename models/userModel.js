import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, default: "" }, // Default to an empty string
    address: {
        line1: { type: String, default: "" }, // Default to an empty string
        line2: { type: String, default: "" }  // Default to an empty string
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
}, { timestamps: true });

const userModel = mongoose.models.users || mongoose.model("users", userSchema);
export default userModel;
