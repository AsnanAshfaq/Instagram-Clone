export const InitialState = {
    user : {},
}

const Reducer = (state,action) => {

    switch(action.type){
        // adding user 
        case 'ADD_USER':
            return {...state,
                postCount : state.postCount+1}

        default:
            return state
    }
}

export default Reducer