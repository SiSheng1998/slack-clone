import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

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
      Chat
    </Container>
  )
}

export default Chat

const Container = styled.div`
  
`

const ChatHeader = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  padding-right: 19px;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`
const ChannelContainer = styled.div`

`

const ChannelName = styled.div`
  font-weight: bold;
`

const ChannelDisc = styled.div`
  margin-top: 5px;
  color: grey;
`

const DetailsContainer = styled.div`
  display: flex;
  color: grey;
`

const Details = styled.div`
  padding-right: 10px;
`