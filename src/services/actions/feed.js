export const GET_FEED_REQUEST = 'GET_FEED_REQUEST'
export const GET_FEED_SUCCESS = 'GET_FEED_SUCCESS'
export const GET_FEED_FAILED = 'GET_FEED_FAILED'

/*export const getFeedRequest = () => async (dispatch) => {
	dispatch({ 
        type: GET_FEED_REQUEST 
    });	

	return await fetch() 
		.then( async (response) => {            
			if (response.ok) {
                return await response.json()
            } else {
                throw new Error('Something went wrong')
            }
		})
		.then((response) => {            
            if (response && response.success) {
                dispatch({ 
                    type: GET_FEED_SUCCESS,
                    orders: response.data
                });	
            }		
		})
		.catch(() => {
			dispatch({ 
                type: GET_FEED_FAILED 
            });
		});
}*/