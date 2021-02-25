import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

function ChatInput() {
  return (
    <Container>
      <InputContainer>
        <form>
          <input type="text" placeholder="Message here..." />

          <SendButton>
            <Send />
          </SendButton>
        </form>

        <SettingContainer>
          <TextFormat>
            <FormatBoldIcon />
            <FormatItalicIcon />
            <StrikethroughSIcon />
            <CodeIcon />
            <LinkIcon />
            <FormatListNumberedIcon />
          </TextFormat>

          <Upload>
            <MoreHorizIcon />
            <FormatSizeIcon />
            <AlternateEmailIcon />
            <SentimentSatisfiedOutlinedIcon />
            <AttachFileOutlinedIcon />
          </Upload>
        </SettingContainer>
      </InputContainer>
    </Container>
  )
}

export default ChatInput

const Container = styled.div`
  padding: 0 20px 24px;
`

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;

    input {
      flex: 1;
      border: none;
      font-size: 13px;
      background: transparent;
    }

    input:focus {
      outline: none;
    }
  }
`

const SendButton = styled.div`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;

  .MuiSvgIcon-root {
    width: 18px;
  }

  :hover {
    background: #148567;
  }
`

const Send = styled(SendIcon)`
  color: #d9d9d9;
`

const SettingContainer = styled.div`
  background: #f6f6f6;
  border-top: 1px solid grey;
  border-radius: 0 0 4px 4px;
  padding: 5px 10px;
  color: rgb(97,96,97);
  display: flex;
  justify-content: space-between;

  .MuiSvgIcon-root {
    font-size: 1.2rem;
    cursor: pointer;
  }
`

const TextFormat = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    margin-right: 10px;
  }
`

const Upload = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    margin-left: 10px;
  }
`