import types from "./actionTypes";

const { BASE_URL, } = process.env;

const getProducts = () => dispatch => fetch(`${BASE_URL}/products`, {
    mode: "cors",
    headers: {
        "Content-Type": "application/json",
    },
}).then(
    response => response.json()
).then((data) => {
    if (data.products) {
        dispatch({
            type: types.PRODUCTS_FETCH_SUCCESS,
            payload: {
                products: data.products,
            },
        });
    } else {
        dispatch({
            type: types.PRODUCTS_FETCH_FAILURE,
            errors: data.errors,
        });
    }
});

export default getProducts;
