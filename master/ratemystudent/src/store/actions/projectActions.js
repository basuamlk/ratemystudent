

export const createProject = (project) => {//used to create a new student in firebase
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            createdAt: new Date()
        }).then(() =>  {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR'});
        })
    }
};