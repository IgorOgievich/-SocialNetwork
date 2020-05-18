const Follow = "Follow";
const Unfollow = "Unfollow";
const SET_USERS = "SET_USERS";

let initialState = {
        users: [
            {id:1, followed: false, fullName: "Igor", status:"I am a boss", location: {city: "Minsk", country: "Belarus"}},
            {id:1, followed: false, fullName: "Anna", status:"I am a girls", location: {city: "Lvov", country: "Ukraine"}},
        ],
    };

const usersReducer =(state=initialState, action) => {
    switch (action.type) {
        case Follow:
            return  {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: true}
                    }
                  return   e;
                })
            };
        case Unfollow:
            return  {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userId) {
                        return {...e, followed: false}
                    }
                    return   e;
                })
            };
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
        return state;
    }
};

export const followAC = (userId) => ({type: Follow, userId});
export const unfollowAC = (userId) => ({type: Unfollow, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default usersReducer;