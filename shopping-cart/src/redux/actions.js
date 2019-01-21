export const actionTypes = {
    ADD_TO_CART: 'cart/ADD_TO_CART',
    REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
    INCREMENT_PRODUCT_AMOUNT: 'cart/INCREMENT_PRODUCT_AMOUNT',
    DECREMENT_PRODUCT_AMOUNT: 'cart/DECREMENT_PRODUCT_AMOUNT',
};

export const addToCart = id => ({
    type: actionTypes.ADD_TO_CART,
    payload: {
        id,
    },
});

export const removeFromCart = id => ({
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
        id,
    },
});

export const incrementProductAmount = id => ({
    type: actionTypes.INCREMENT_PRODUCT_AMOUNT,
    payload: {
        id,
    },
});

export const decrementProductAmount = id => ({
    type: actionTypes.DECREMENT_PRODUCT_AMOUNT,
    payload: {
        id,
    },
});
