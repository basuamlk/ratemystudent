let db = {
    users: [
        {
            userId: 'djd43k2323kff4934fd4',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2019-07-06T23:43:39.427Z',
            imageUrl: 'image/sdfsdfsfdf/dfsdfsdfs',
            bio: 'Hola, my name is Javier, how you doin',
            website: 'https://user.com',
            location: 'Atlanta, Georgia'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: "2019-07-06T23:43:39.427Z",
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'sadfksfksksdk2j3fgdfg',
            body: 'nice one man!',
            createdAt: '2019-07-06T23:43:39.427Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'sdfsdfjldskjdsflkfj',
            type: 'like | comment',
            createdAt: '2019-07-06T23:43:39.427Z'
        }
    ]
};
const userDetails = {
    // Redux data
    credentials: {
        userId: 'djd43k2323kff4934fd4',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2019-07-06T23:43:39.427Z',
        imageUrl: 'image/sdfsdfsfdf/dfsdfsdfs',
        bio: 'Hola, my name is Javier, how you doin',
        website: 'https://user.com',
        location: 'Atlanta, Georgia'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'hh239423ksdfk3BksdfMpa'
        },
        {
            userHandle: 'user',
            screamId: '3I0ndsfsQexsdfks50hBXO'
        }
    ]
}