export const CALC_TOTAL_PRICE = 'CALC_TOTAL_PRICE'
export const RESET_TOTAL_PRICE = 'RESET_TOTAL_PRICE'

export const calcTotalPrice = (payload) => (dispatch) => {
    dispatch({
        type: CALC_TOTAL_PRICE,
        payload: payload
    });
};

export const resetTotalPrice = () => (dispatch) => {
    dispatch({
        type: RESET_TOTAL_PRICE
    });
};