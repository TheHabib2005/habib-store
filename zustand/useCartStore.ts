import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

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

interface CartState {
  cart: [];
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
      }),
      {
        name: "cart",
      }
    )
  )
);
