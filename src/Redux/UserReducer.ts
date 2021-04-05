import boy from '../assets/default avatar/boy.svg'
import boy1 from '../assets/default avatar/boy-1.svg'
import man from '../assets/default avatar/man.svg'
import man3 from '../assets/default avatar/man-3.svg'
import girl from '../assets/default avatar/girl.svg'


export type User = {
    id: string
    firstName: string
    lastName: string
    status: string
    photo: string
}
type UsersStateType = {
    me: User
    users: Array<User>
}
const initialState: UsersStateType = {
    me: {id: '5', firstName: 'Vadim', lastName: 'Cyxarb', status: 'make test tasks', photo: man},
    users: [
        {id: '1', firstName: 'Ivan', lastName: 'Ivanov', status: 'im hungry', photo: boy},
        {id: '2', firstName: 'Maksim', lastName: 'Smirnov', status: '', photo: boy1},
        {id: '3', firstName: 'Nastya', lastName: 'Smirnova', status: '', photo: girl},
        {id: '4', firstName: 'Oleg', lastName: 'Orlov', status: '', photo: man3}
    ] //список пользователей с кем открыт личный диалог
}

export const UserReducer = (state = initialState, action: any) => {
    switch(action.type){
        default:
            return {...state}
    }
}