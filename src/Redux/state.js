
let store = {
    _state : {
        messages : [
            {message: "Hi Igor"},
            {message: "Hi Anna"},
        ],
        message: [
            {message: 'Hello Igor'},
            {message: 'Hello Anna'},
            {message: 'Hello Den'}
        ],
        name:  [
            {name : "Igor", id : "1"},
            {name : "Anna", id : "2"},
            {name : "Den", id : "3"}
        ],

    },
    getState () {return this._state;},
    subscribe (observer) {this._rerender = observer;},
    _rerender ()  {console.log("HEY")},
    addPost (postMessage) {
        let newPost = {
            message: postMessage
        };
        this._state.messages.push(newPost);
        this._rerender(this._state);
    },
    dispatch(action) {
        if (action.type=== "ADD-POST"){
            let newPost = {
                message: postMessage
            };
            this._state.messages.push(newPost);
            this._rerender(this._state);
        }
    }
};


export default store;
window.store = store;

