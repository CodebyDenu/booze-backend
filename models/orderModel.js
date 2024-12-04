import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
        spicyLevel: { type: String, required: true },
        price: { type: Number, required: true }
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'Pending' }, // e.g., Pending, Shipped, Delivered
    paymentStatus: { type: String, default: 'Unpaid' }, // e.g., Unpaid, Paid
    invoiceId: { type: String },
    address: { type: String, required: true },
    phone: { type: String, required: true }
}, { timestamps: true });

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
