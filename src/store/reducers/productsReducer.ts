import { FetchedProductProps } from "../../types/types";


const initialState:FetchedProductProps[] = []

const productsReducer = (state  = initialState, action : any) => { //fix any

    switch(action.type){
        case "FETCH_PRODUCTS": {
            return {
                ...state, ...action.payload
            }
        }
            

    }
}



export default productsReducer;