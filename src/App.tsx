import './App.scss';
import "antd/dist/antd.css";
import Messages from './components/messages/Messages';
import Dialogs from './components/dialogs/Dialogs';

function App(props: any) {
  return (
    <div className='app'>
      <div className='app__dialogs'>
        <Dialogs />
      </div>
      <div className='app__messages'>
        <Messages />
      </div>
    </div>
  )
}

export default App;
