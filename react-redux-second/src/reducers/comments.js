const ADD_COMMENT = 'ADD_COMMENT';
const INITIAL_COMMENTS = 'INITIAL_COMMENTS';
const DELETE_COMMENT = 'DELETE_COMMENT';

export default function(state, action){
    if(!state){
        return {comments:[]}
    }
    switch (action.type){
        case ADD_COMMENT:
            return{
                ...state,
                comments:[...state.comments,action.comment]
            }
        case INITIAL_COMMENTS:
            return{
                comments:action.comments
            }
        case DELETE_COMMENT:
            return{
                comments:[...state.comments.slice(0,action.index), ...state.comments.slice(action.index+1)]
            }
        default:
            return state;
    }

}
export const addDispatch = (comment)=>{
    return {type:ADD_COMMENT, comment}
}
export const initialDispatch = (comments)=>{
    return {type:INITIAL_COMMENTS, comments}
}
export const deleteDispatch = (index)=>{
    return {type:DELETE_COMMENT, index}
}