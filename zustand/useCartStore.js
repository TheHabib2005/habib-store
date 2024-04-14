import { CartProductsTYPE, ProductsTYPE } from "@/constant-type";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import toast from "react-hot-toast";
// export const useCounterStore = create()(
//   devtools(
//     persist(
//       (set) => ({
//         count: 0,
//         increment: (payload) =>
//           set((state) => ({ count: state.count + payload })),
//       }),
//       {
//         name: "new-count-storage",
//       }
//     )
//   )
// );

// interface CartState {
//   cart: CartProductsTYPE[];
// }

export const useCartStore = create()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        totalAmount: 0,
        isCartOpen: false,
        setIsCartOpen: (payload) => {
          set({ isCartOpen: payload });
        },
        addToCart: (product) => {
          const existingProduct = [...get().cart].find(
            (item) => item?.id === product.id
          );
          let updatedCart = [...get().cart];
          if (existingProduct) {
            updatedCart = updatedCart.map((item) => {
              if (item.id === product.id) {
                return {
                  ...item,
                  quantity: item.quantity + 1,
                
                };
              } else {
                return {
                  ...item,
            
                };
              }
            });
          } else {
            updatedCart.push(product);
          }
          set({ cart: updatedCart });
          set({ isCartOpen: true });
          set({
            totalAmount: updatedCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ),
          });
          toast.success("Product added to cart");
        },
        removeFromCart: (id) => {
          let updatedCart = [...get().cart].filter((c) => c.id !== id);
          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ),
          });
          toast.success("Product removed to cart");

        },
        updateQuantity: (type, id) => {
          let updatedCart = [...get().cart];

          updatedCart = updatedCart.map((product) => {
            if (type === "increment") {
              if (product.id === id) {
                return {
                  ...product,
                  quantity: product.quantity + 1,
                };
              }
            } else {
              if (product.id === id) {
                return {
                  ...product,
                  quantity: product.quantity - 1,
                };
              }
            }
          });

          set({ cart: updatedCart });
          set({
            totalAmount: updatedCart.reduce(
              (acc, item) => acc + item.quantity * item.price,
              0
            ),
          });
   
        },
        // updateAmount: () => {
        //   let updateAmount = [...get().cart];

        //   updateAmount.reduce((asc, curr) => {
        //     return asc + curr.price * curr.quantity;
        //   }, 0);

        //   set({ totalAmount: updateAmount });
        // },
      }),
      {
        name: "cart",
      }
    )
  )
);
