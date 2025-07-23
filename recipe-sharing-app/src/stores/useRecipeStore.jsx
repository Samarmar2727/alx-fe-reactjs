import {create} from "suztand"

const useRecipeStore = create (
    set => ({
        recieps :[],
        addRecips :(newRecipe) => set(state => ({recieps: [...state.recieps,newRecipe] 
        })),
        setRecips :(recieps) => set(recieps)

    }))

    export default useRecipeStore;
