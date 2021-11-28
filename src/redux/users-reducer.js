const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'set_users';


let initialState = {
    users: [
        { 
            uuid: 1, 
            avatar: 'https://images.ua.prom.st/1941673436_w200_h200_muzhskie-solntsezaschitnye-ochki.jpg', 
            followed: false, 
            fullName: 'Tony Stark', 
            bio:  'Just a genius!', 
            location: {
                city: 'Miami', 
                country: 'USA'
            }
        },
        { uuid: 2, avatar: 'https://i.pinimg.com/236x/27/2f/da/272fdaed920b4592db80220ed5721276--yahoo.jpg', followed: true, fullName: 'Bruce Wayne', bio:  'I am a Batman.', location: {city: 'Gotham', country: 'USA'}},
        { uuid: 3, avatar: 'https://sun9-24.userapi.com/impf/c639719/v639719333/61644/lMAjbpLgooY.jpg?size=320x239&quality=96&sign=8197c672af40cab72665b8c3c2909b7d&c_uniq_tag=F-7X6GRtqMiMqRzXp5u0ObYW4fAuoo4jVJm5GBkJHYI&type=album', followed: true, fullName: 'Steve Rogers', bio:  'U can call me a Cap', location: {city: 'New York', country: 'USA'}},
        { uuid: 4, avatar: 'https://cdn.dribbble.com/users/1634115/screenshots/6250700/nickfury.png?compress=1&resize=400x300', followed: false, fullName: 'Nick Fury', bio:  '"secret" my second name', location: {city: 'New York', country: 'USA'}},
    ],
};


const usersReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};

        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.uuid === action.id){
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(u => {
                    if(u.uuid === action.id){
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        
        default:
            return state;
    }
}


export const setUsersAC = (users) => {
    return {type: SET_USERS, users: users}
}

export const followAC = (userUUID) => {
    return {
        type: FOLLOW,
        id: userUUID
    };
}

export const unfollowAC = (userUUID) => {
    return {
        type: UNFOLLOW,
        id: userUUID
    }
}


export default usersReducer;
