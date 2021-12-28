import { configureStore } from "@reduxjs/toolkit"
import eCommerceSlice from "./eCommerceSlice"

export const store = configureStore({
    reducer: {
        ecommerce: eCommerceSlice,
    },
})