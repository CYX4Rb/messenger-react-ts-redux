import { combineReducers, createStore } from "redux"
import { chatReducer } from "./ChatReducer";
import { usersReducer } from "./UsersReducer";

export type RootReducerType = typeof rootReducer;

export type AppStateType = ReturnType<RootReducerType>

localStorage.setItem('random', JSON.stringify({
    title: 'Random',
    status: 'обсуждаем котиков',
    chatType: 'group',
    messages: [
        { id: '01', timeSending: '2021-03-23 16:51:14', text: 'коты', senderId: '3' },
        { id: '02', timeSending: '2021-03-23 16:52:13', text: 'хачу кофе', senderId: '1' },
        { id: '03', timeSending: '2021-03-23 16:53:12', text: 'скидывйте котоф', senderId: '2' },
        { id: '04', timeSending: '2021-03-23 16:54:12', text: 'скдывайте фотки котов', senderId: '3' },
        { id: '05', timeSending: '2021-03-23 16:55:12', text: 'кто-то опять занял туалет на 4 часа', senderId: '2' },
        { id: '06', timeSending: '2021-03-23 16:56:12', text: 'я там работаю!!!!', senderId: '5' },
        { id: '07', timeSending: '2021-03-23 16:57:12', text: 'а почему не за рабочем месте', senderId: '4' },
        { id: '08', timeSending: '2021-03-23 16:58:12', text: 'тут тик токи лучше смотреть', senderId: '5' },
        { id: '09', timeSending: '2021-03-23 16:59:12', text: 'другие тоже хотят', senderId: '4' }
    ]
}))

localStorage.setItem('work', JSON.stringify({
    title: 'Work',
    status: 'Здесь только по работе',
    chatType: 'group',
    members: ['1', '2', '3', '4', '5'],
    logo: '',
    messages: [
        { id: '01', timeSending: '2021-03-23 16:51:14', text: 'Привет', senderId: '1' },
        { id: '02', timeSending: '2021-03-23 16:52:13', text: 'hi', senderId: '2' },
        { id: '03', timeSending: '2021-03-23 16:53:12', text: 'доброе утро', senderId: '3' },
        { id: '04', timeSending: '2021-03-23 16:54:12', text: 'как дела?', senderId: '1' },
        { id: '05', timeSending: '2021-03-23 16:55:12', text: 'отлично', senderId: '5' },
        { id: '06', timeSending: '2021-03-23 16:56:12', text: 'таааак', senderId: '2' },
        { id: '07', timeSending: '2021-03-23 16:57:12', text: 'здесь должен быть какой-то текст', senderId: '4' },
        { id: '08', timeSending: '2021-03-23 16:58:12', text: 'и здесь тоже', senderId: '3' },
        { id: '09', timeSending: '2021-03-23 16:59:12', text: 'но я не придумал', senderId: '1' }
    ]
}))
const rootReducer = combineReducers({
    users: usersReducer,
    chat: chatReducer,
})

export const store = createStore(rootReducer)