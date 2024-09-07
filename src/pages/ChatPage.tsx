import { useContext } from 'react';
import ChatSelect from '../components/ChatSelect';
import InboxPeople from '../components/InboxPeople';
import Messages from '../components/Messages';
import '../css/chat.css';
import { ChatContext } from '../context/chat/ChatContext';
import { ChatContextType } from '../types/chat';

export default function ChatPage() {

    const { chatState } = useContext(ChatContext) as ChatContextType

    return (

        <div className="messaging">
            <div className="inbox_msg">

                <InboxPeople />
                {
                    (chatState.activeChat) ?
                        <Messages /> :
                        <ChatSelect />
                }
            </div>
        </div>
    )
}
