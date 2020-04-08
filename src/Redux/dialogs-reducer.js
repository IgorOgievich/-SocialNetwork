
const Update_New_Message_Body = "Update_New_Message_Body";
const Add_Message = "Add_Message";

let initialState = {
    message: [
        {message: 'Hello Igor'},
        {message: 'Hello Anna'},
        {message: 'Hello Den'}
    ],
        name: [
    {name: "Igor", id: "1"},
    {name: "Anna", id: "2"},
    {name: "Den", id: "3"}
],
    newMessageBody: "",
};

const dialogsReducer =(state=initialState, action) => {
    switch (action.type) {
        case Add_Message:
            let body = state.newMessageBody;
            state.message.push({message: body});
            state.newMessageBody = "";
            return state;
        case Update_New_Message_Body:
            state.newMessageBody = action.body;
            return state;
        default:
            return state;
    }
};

export const addMessageActionCreator = () => {
    return {
        type: Add_Message,
    }
};
export const updateNewMessageActionCreator = (body) => {
    return {
        type: Update_New_Message_Body,
        body: body,
    }
};

export default dialogsReducer;



