import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
  return (
    <Container>
      <ChatHeader>
        <ChannelContainer>
          <ChannelName>
            # Channel 1
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
        <ChatMessage />
      </MessageContainer>

      <ChatInput />
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
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

`