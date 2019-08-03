

export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'Steven',
            authorLastName: 'Desprez',
            authorId: 123,
            createdAt: new Date()
        }).then(() =>  {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR'});
        })
    }
};