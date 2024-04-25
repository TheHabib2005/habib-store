import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
export const useOtherStore = create()(
  devtools(
    persist(
      (set,get) => ({
        recentSearch: [],
        addRecentSearch: (payload) => {
          let updated = [...get().recentSearch];
           
          const isExists = updated.findIndex(item => item.value.toLowerCase().includes(payload.value.toLowerCase()))
          
            
          if(isExists !== -1){
            updated = updated.map((item) => {
              if (item.value.toLowerCase().includes(payload.value.toLowerCase())) {
                return {
                  ...item,
                  createAt: new Date().getTime()
                
                };
              } else {
                return {
                  ...item,
            
                };
              }
            });
          }else{
            updated.unshift(payload);
          }
          set({recentSearch : updated.sort((a,b) => b.createAt - a.createAt)})
     

             
        },
        removeSerchHistry:(index) =>{
          let updated = [...get().recentSearch];
     
 // 
         let result =  updated.filter((e,i) => i !== index);
          set({recentSearch : result})
        }
      }),
      {
        name: "search-history",
      }
    )
  )
);
