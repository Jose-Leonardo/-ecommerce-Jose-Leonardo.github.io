import {configureStore} from "@reduxjs/toolkit"
import products from "./slices/slice"
export default configureStore({
    reducer: {
        products 
    }

})

