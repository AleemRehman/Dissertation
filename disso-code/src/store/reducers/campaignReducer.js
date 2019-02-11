const initState = {
}

const campaignReducer = (state=initState, action) => {
    switch(action.type){
        case 'CREATE_CAMPAIGN':
            console.log('created campaign', action.campaign);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
        return state;
    }
}

export default campaignReducer;