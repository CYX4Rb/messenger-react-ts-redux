enum Types {
    SEND_MESSAGE = 'SEND_MESSAGE',
    SWITCH_CHAT = 'SWITCH_CHAT'
}

export type MessageType = {
    id: string
    timeSending: string
    text: string
    senderId: string
}

export type Action<T extends string, G> = {
    type: T
    payload: G
}
export type ActionTypes = 
    | Action<Types.SEND_MESSAGE, MessageType> 
    | Action<Types.SWITCH_CHAT, string>


type ChatStateType = {
    title: string
    status: string
    chatType: 'group' | 'direct'
    members: Array<string>
    logo: string
    messages: Array<MessageType>
}

const initialState: ChatStateType = {
    title: 'Work',
    status: 'Здесь только по работе',
    chatType: 'group',
    members: ['1', '2', '3', '4', '5'],
    logo: '',
    messages: [
        {id: '01', timeSending: '2021-03-23 16:51:14', text: 'Привет', senderId: '1'},
        {id: '02', timeSending: '2021-03-23 16:52:13', text: 'hi', senderId: '2'},
        {id: '03', timeSending: '2021-03-23 16:53:12', text: 'доброе утро', senderId: '3'},
        {id: '04', timeSending: '2021-03-23 16:54:12', text: 'как дела?', senderId: '1'},
        {id: '05', timeSending: '2021-03-23 16:55:12', text: 'отлично', senderId: '5'},
        {id: '06', timeSending: '2021-03-23 16:56:12', text: 'таааак', senderId: '2'},
        {id: '07', timeSending: '2021-03-23 16:57:12', text: 'здесь должен быть какой-то текст', senderId: '4'},
        {id: '08', timeSending: '2021-03-23 16:58:12', text: 'и здесь тоже', senderId: '3'},
        {id: '09', timeSending: '2021-03-23 16:59:12', text: 'но я не придумал', senderId: '1'}
    ]
}

export const chatReducer = (state = initialState, action: ActionTypes): ChatStateType => {
    switch(action.type){
        case Types.SEND_MESSAGE: 
            return {...state, 
                messages: [...state.messages, action.payload]
            }
        case Types.SWITCH_CHAT: 
            
            console.log(action.payload);
            //@ts-ignore
            console.log(JSON.parse(localStorage.getItem(action.payload)))
            //@ts-ignore
            const chat = JSON.parse(localStorage.getItem(action.payload))
            return {
                ...state,
                title: action.payload,
                status: chat.status,
                logo: chat.logo,
                chatType: chat.chatType,
                members: chat.members,
                messages: chat.messages,

            }
        default:
            return {...state}
    }
}
  

export const sendMessage = ({id, timeSending, text, senderId}: MessageType ): ActionTypes =>({type: Types.SEND_MESSAGE, payload: {id, timeSending, text, senderId}})

export const switchChat = (key: string): ActionTypes => ({type: Types.SWITCH_CHAT, payload: key})