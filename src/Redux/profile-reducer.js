const Add_Post = "ADD-POST";

let initialState = {
        messages: [
            {message: "Hi Igor"},
            {message: "Hi Anna"},
        ],
    };

const profileReducer =(state=initialState, action) => {

    if (action.type === Add_Post){
        let newPost = {
            message: "aaa"
        };
        state.messages.push(newPost);
}
    return state;
};

export const addPostActionCreator = (text) => {
    return {
        type: Add_Post,
        newText: text,
    }
};

export default profileReducer;