import axios from 'axios';

const initialState = {
    cars: [],
    selectedColors: ['Blue', 'Silver'],
    selectedDriveTypes: ['RWD'],
    filteredCars: []
}

const GET_CARS = 'GET_CARS';
const FILTER_CARS = 'FILTER_CARS'

export function getCars() {
    const cars = axios.get('/api/cars/').then(res => res)
    return {
        type: GET_CARS,
        payload: cars
    }
}

export function filterCars(queries) {
    console.log(`/api/cars/search${queries}`)
    const filteredCars = axios.get(`/api/cars/search${queries}`).then(res => res)
    return {
        type: FILTER_CARS,
        payload: filteredCars
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CARS + '_PENDING':
            return state;
        case GET_CARS + '_FULFILLED':
            return Object.assign({}, state, { cars: action.payload.data });
        case GET_CARS + '_REJECTED':
            return state;

        case FILTER_CARS + '_PENDING':
            return state;
        case FILTER_CARS + '_FULFILLED':
            return Object.assign({}, state, { filteredCars: action.payload.data });
        case FILTER_CARS + '_REJECTED':
            return state;

        default:
            return state;
    }
}

