import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="User" />
      </UserAvatar>

      <MessageContent>
        <Name>
          Sheng
          <span>25/2/2021 11:18 AM</span>
        </Name>
          
        <Text>
          This is the best challenge ever!
        </Text>
      </MessageContent>
    </Container>
  )
}

export default ChatMessage

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;

  :hover {
    background: #f6f6f6;
  }
`

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;

  img {
    width: 100%;
  }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;

  span {
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97,96,97);
    font-size: 13px;
  }
`

const Text = styled.span`

`