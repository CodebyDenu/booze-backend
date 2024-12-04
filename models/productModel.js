import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    meatType: { type: String, required: true }, // e.g., chicken, beef
    category: { type: String, required: true }, // e.g., spicy, non-spicy
    subcategorySize: { type: String, required: true }, // e.g., 750 ml box
    spicyLevel: { type: String, required: true }, // e.g., mild, medium, hot
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String } // URL or path for product image
}, { timestamps: true });

const productModel = mongoose.models.product || mongoose.model("product", productSchema);
export default productModel;
