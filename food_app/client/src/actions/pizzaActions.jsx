import axios from 'axios';

export const getAllPizzas = () => async (dispatch) => {
    console.log('Fetching pizzas...');
    dispatch({ type: 'GET_PIZZAS_REQUEST' });
    try {
        const response = await axios.get('http://localhost:5000/getpizzas');
        console.log('Received pizzas:', response.data);
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: response.data });
    } catch (error) {
        console.error('Error fetching pizzas:', error);
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error.message });
    }
};
