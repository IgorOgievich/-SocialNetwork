
const Update_New_Message_Body = "Update_New_Message_Body";
const Add_Message = "Add_Message";

const dialogsReducer =(state, action) => {
    switch (action.type) {
        case Add_Message:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.message.push({message: body});
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



