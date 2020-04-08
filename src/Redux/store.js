import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            messages: [
                {message: "Hi Igor"},
                {message: "Hi Anna"},
            ],
        },
        dialogsPage: {
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
        }

    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerender = observer;
    },
    _rerender() {
        console.log("HEY")
    },
    addPost() {
        let newPost = {
            message: "AAA"
        };
        this._state.messages.push(newPost);
        this._rerender(this._state);
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._rerender(this._state);
    }
};

export default store;
window.store = store;

