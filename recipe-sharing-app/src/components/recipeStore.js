import {create} from "zustand"

const useRecipeStore = create (
    set => ({
        recieps :[],
        addRecipe :(newRecipe) => set(state => ({recieps: [...state.recieps,newRecipe] 
        })),
        setRecipe :(recieps) => set(recieps)

    }))

    export default useRecipeStore;