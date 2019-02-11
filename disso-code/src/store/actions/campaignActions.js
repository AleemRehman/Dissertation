export const createCampaign = (campaign) => {
    return(dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('campaigns').add({
            ...campaign,
            authorFirstName: 'test',
            authorLastName: 'test',
            createdAt: new Date(),
            createdBy: 12345
        }).then(() => {
            dispatch({type: 'CREATE_CAMPAIGN', campaign});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', err})
        })
    }
};