import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router-dom'
import firebase from 'firebase'

function Chat({ user }) {
  let { channelId } = useParams();
  const [ channel, setChannel ] = useState();
  const [ messages, setMessages ] = useState([]);

  const getMessages = () => {
    db.collection('rooms')
    .doc(channelId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) => {
      let messages = snapshot.docs.map((doc) => doc.data());
      console.log(messages);
      setMessages(messages);
    })
  }

  const sendMessage = (text) => {
    if(channelId){
      let payload = {
        text: text,
        timestamp: firebase.firestore.Timestamp.now(),
        user: user.name,
        userImage: user.photo
      }
      db.collection('rooms').doc(channelId).collection('messages').add(payload);
      console.log(payload);
    }
  }
  
  const getChannel = () => {
    db.collection('rooms')
    .doc(channelId)
    .onSnapshot((snapshot) => {
      setChannel(snapshot.data());
    })
  }

  useEffect(() => {
    getChannel();
    getMessages();
  }, [channelId])

  return (
    <Container>
      <ChatHeader>
        <ChannelContainer>
          <ChannelName>
            # {channel && channel.name}
          </ChannelName>

          <ChannelDisc>
            The first channel in the stack clone!
          </ChannelDisc>
        </ChannelContainer>
        
        <DetailsContainer>
          <Details>
            Details
          </Details>

          <InfoOutlinedIcon />
        </DetailsContainer>
      </ChatHeader>

      <MessageContainer>
        {
          messages.length > 0 &&
          messages.map((data, index) => (
            <ChatMessage
              text={data.text}
              name={data.user}
              image={data.userImage}
              timestamp={data.timestamp}
            />
          ))
        }
      </MessageContainer>

      <ChatInput sendMessage={sendMessage} />
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
`

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  border-bottom: 1px solid rgb(83, 39, 83, .13);
`
const ChannelContainer = styled.div`

`

const ChannelName = styled.div`
  font-weight: 700;
`

const ChannelDisc = styled.div`
  font-weight: 400;
  margin-top: 8px;
  color: #606060;
  font-size: 13px;
`

const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
`

const Details = styled.div`
  padding-right: 10px;
`

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`