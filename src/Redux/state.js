

let state = {
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
    ]
};
export let addPost = (props) => {
    let newPost = {
        message: props
    };
    state.messages.push(newPost)
};

export default state;