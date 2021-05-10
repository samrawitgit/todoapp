//Library of actions that handle posts
export default function deletePost(id) {
    return {
        type: 'DELETE_POST',    
        id                          //same as id: id because they have the same name (but they're different things!!)
    }
}