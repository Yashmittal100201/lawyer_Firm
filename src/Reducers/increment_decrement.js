import { useEffect, useState } from "react";

// const [initialState,setInitialState] = useState([]);

const initialState = require('../data.json');

const changeTheValue = (state = initialState, action) =>{

    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export default changeTheValue;