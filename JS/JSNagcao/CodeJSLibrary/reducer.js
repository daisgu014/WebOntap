const init ={
    cars: ['BMW']
}
export default function reducer(state=init , action, args){
    console.log(action,args)
    switch (action){
        case 'CREATE':

        break;
        case 'ADD':
        const [newCar] =args
            return {
                ...state,
                cars: [...state.cars, newCar]
            }
        break;
        default: 
        return state
    }
}