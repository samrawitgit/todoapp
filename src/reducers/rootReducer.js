
const initState = {
    posts: [
        {id: '1', title: 'Squirte Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in provident assumenda recusandae dignissimos ex, amet esse hic illum quidem, aliquid praesentium? Sit beatae ullam provident eos harum animi doloremque!'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in provident assumenda recusandae dignissimos ex, amet esse hic illum quidem, aliquid praesentium? Sit beatae ullam provident eos harum animi doloremque!'},
        {id: '3', title: 'a Helix Fossil was Fund', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in provident assumenda recusandae dignissimos ex, amet esse hic illum quidem, aliquid praesentium? Sit beatae ullam provident eos harum animi doloremque!'},
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    switch (action) {
        case ('DELETE_POST'):
            let newPosts = state.posts.filter(post => {
                return action.id !== post.id
            });
            return{
                ...state,
                posts: newPosts,
            }
            break;
    }
    return state;
}

export default rootReducer;