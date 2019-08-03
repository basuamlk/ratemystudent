const initState = {
    projects:[
        {id: '1', title: 'steven desprez', content: 'he is a noob'},
        {id: '2', title: 'carolyn folk', content: 'she is a noob'},
        {id: '3', title: 'cody chatman', content: 'he is a noob'}
    ]
 }

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;

        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        
        default:
            return state;

    }
}

export default projectReducer;