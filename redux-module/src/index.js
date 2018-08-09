function renderApp (newAppState, oldAppState = {}) { // 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
    if (newAppState === oldAppState) return // 数据没有变化就不渲染了
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}

function renderTitle (newTitle, oldTitle = {}) {
    if(newTitle === oldTitle) return
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent = {}) {
    if(newContent === oldContent) return
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}
function createStore (stateChanger) {
    let state = null;
    const listeners = [];         //注册监听函数列表
    const subscribe = (listener)=>listeners.push(listener);   //对外暴露的注册函数
    const getState = () => state;
    const dispatch = (action) => {
        state = stateChanger(state, action);                  //覆盖原有对象
        listeners.forEach((listener)=>listener());            //调用所有注册过的函数
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe };
}
function stateChanger (state, action) {
    if(!state){
        return{
            title:{
                text: '小树',
                color: 'red'
            },
            content:{
                text: '小书内容',
                color:'blue'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return{
                ...state,              //浅复制原有状态
                title: {               //新建title对象覆盖原有属性
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return { // 构建新的对象并且返回
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state // 没有修改，返回原来的对象
    }
}

const store = createStore(stateChanger);
let oldState = store.getState() // 缓存旧的 state
store.subscribe(() => {
    const newState = store.getState() // 数据可能变化，获取新的 state
    renderApp(newState, oldState) // 把新旧的 state 传进去渲染
    oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
})

renderApp(store.getState());
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' }) // 修改标题颜色