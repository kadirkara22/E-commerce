import { createSlice } from "@reduxjs/toolkit";

export const eCommerceSlice = createSlice({
    name: "ecommerce",
    initialState: {
        items: [],
        detail: [],
        cart: [],
        favoriCart: []
    },
    reducers: {
        showProduct: (state, action) => {
            const data = action.payload
            state.items = data
        },
        showDetail: (state, action) => {
            const data = [action.payload]
            state.detail = data
        },
        added: (state, action) => {
            const product = action.payload
            state.cart.push(product)
        },
        selectFavori: (state, action) => {
            const product = action.payload
            state.favoriCart.push(product)
            state.favoriCart = state.favoriCart.find(item => item.id === product.id)
                ? state.favoriCart.map(item => item.id === product.id ? item.favori === false ? { ...item, favori: true } : { ...item, favori: false }
                    : item)
                : [...state.favoriCart]
            state.favoriCart = state.favoriCart.filter(item => item.favori !== false)

            state.items = state.items.find(item => item.id === product.id)
                ? state.items.map(item => item.id === product.id ? item.favori === false ? { ...item, favori: true } : { ...item, favori: false }
                    : item)
                : [...state.items]



        }
    }

})

export const { added, selectFavori, showProduct, showDetail } = eCommerceSlice.actions;
export default eCommerceSlice.reducer;