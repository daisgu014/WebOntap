export default function withlogger(reducer) {
    return (prevState, action, args)=>{
        console.group(action);
        console.log('PrevState', prevState);
        console.log('Action Arguments', args);
        const nextState = reducer(prevState, action, args)
        console.log('NextState', nextState);

        console.groupEnd();
        return nextState
    }
}