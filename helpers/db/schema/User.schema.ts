import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirmPassword: { type: String, required: true },
    // address: { type: String, required: true },
    // phoneNumber: { type: String, required: true },
    // paymentInformation: { type: String, required: true },
    // orderHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
    // wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    // cart: [{ type: mongoose.Schema.Types.ObjectId, ref: "CartItem" }],
    // profilePicture: { type: String, required: true },
    // isUserVerifyed: { type: Boolean, default: false },
    // userVerifyToken: { type: String, required: true },
  },
  { timestamps: true }
);

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    shippingAddress: { type: String, required: true },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
    paymentMethod: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);
const Order = mongoose.models.orders || mongoose.model("orders", orderSchema);
export default User;
