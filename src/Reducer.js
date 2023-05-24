import { compose } from 'redux';
import data from './lawyerMock'


let initialState = {
    details:[]
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'fetchData' :
            return {...state};
        default : return {...state}
    }
}

export default { appReducer : appReducer}