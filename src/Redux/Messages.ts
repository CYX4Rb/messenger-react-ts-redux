
export type MessageType = {
    id: string
    timeSending: string
    text: string
    senderId: string
}
type MessagesStateType = {
    WorkMessages: Array<MessageType>
    RandomMessages: Array<MessageType>
    DirectMessages: Array<MessageType>
}
const initialState: MessagesStateType = {
    WorkMessages: [
        {id: '01', timeSending: '2021-03-23 16:51:14', text: 'Привет', senderId: '1'},
        {id: '02', timeSending: '2021-03-23 16:52:13', text: 'hi', senderId: '2'},
        {id: '03', timeSending: '2021-03-23 16:53:12', text: 'доброе утро', senderId: '3'},
        {id: '04', timeSending: '2021-03-23 16:54:12', text: 'как дела?', senderId: '1'},
        {id: '05', timeSending: '2021-03-23 16:55:12', text: 'отлично', senderId: '5'},
        {id: '06', timeSending: '2021-03-23 16:56:12', text: 'таааак', senderId: '2'},
        {id: '07', timeSending: '2021-03-23 16:57:12', text: 'здесь должен быть какой-то текст', senderId: '4'},
        {id: '08', timeSending: '2021-03-23 16:58:12', text: 'и здесь тоже', senderId: '3'},
        {id: '09', timeSending: '2021-03-23 16:59:12', text: 'но я не придумал', senderId: '1'}
    ],
    RandomMessages: [
        {id: '01', timeSending: '2021-03-23 16:51:14', text: 'Привет', senderId: '1'},
        {id: '02', timeSending: '2021-03-23 16:52:13', text: 'hi', senderId: '2'},
        {id: '03', timeSending: '2021-03-23 16:53:12', text: 'доброе утро', senderId: '3'},
        {id: '04', timeSending: '2021-03-23 16:54:12', text: 'как дела?', senderId: '1'},
        {id: '05', timeSending: '2021-03-23 16:55:12', text: 'отлично', senderId: '3'},
        {id: '06', timeSending: '2021-03-23 16:56:12', text: 'таааак', senderId: '5'},
        {id: '07', timeSending: '2021-03-23 16:57:12', text: 'здесь должен быть какой-то текст', senderId: '5'},
        {id: '08', timeSending: '2021-03-23 16:58:12', text: 'и здесь тоже', senderId: '5'},
        {id: '09', timeSending: '2021-03-23 16:59:12', text: 'но я не придумал', senderId: '5'}
    ], 
    DirectMessages: []
}

export const MessagesReducer = (state = initialState, action: any) => {
    switch(action.type){
        default:
            return {...state}
    }
}