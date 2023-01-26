import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fafafb;
  font-family: 'Poppins', sans-serif;
  position: relative;
`;

export const SubContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 3rem;
  font-size: 2rem;
  text-align: ${({ textAlign }) => textAlign};
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 2.8rem;
  line-height: 27px;
  letter-spacing: -0.035em;
  color: #4F4F4F;
`;

export const SubHeading = styled.h2`
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 15px;
  letter-spacing: -0.035em;
  color: #828282;
  margin: 2rem 0 3rem 0;
`;


export const UploadLabel = styled.label`
  display: block;
  background-color: #f6f8fb;
  background-color: ${props => props.isFileDragging ? "#000" : "#f6f8fb"};
  border: 1px dashed #97BEF4;
  width: 100%;
  cursor: pointer;
  padding: 5rem 8rem;
  border-radius: 8px;

  svg{
    width: 12rem;
    height: 12rem;
    fill: #828282;
  }

  p{
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 18px;
    letter-spacing: -0.035em;
    color: #BDBDBD;
  }
`

export const UploadedImgName = styled.p`
  font-size: 1.5rem;
  margin-bottom: .4rem;
`;

export const UploadButton = styled.input`
  text-align: center;
  background-color: #2F80ED;
  border: none;
  font-size: 1.5rem;
  outline: none;
  border-radius: 8px;
  color: #fff;
  padding: 1rem 2rem;
  cursor: pointer;
`;

const progress = keyframes`
  from {
    left: -100%;
  }

  to {
    left: 100%;
  }
`;

export const DownloadProgressBar = styled.div`
  margin: 5rem 0 2rem 0;
  background-color: #F2F2F2;
  height: 6px;
  min-width: 35rem;
  position: relative;
  overflow: hidden;
  border-radius: 8px;

  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    height: 6px;
    width: 45%;
    background-color: #2F80ED;
    border-radius: 8px;
    animation: ${progress} 2s linear infinite;
  }
`;

export const GreenTickImg = styled.div`
  svg{
    fill: #219653;
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export const UploadedImage = styled.img`
  max-width: 40rem;
  border-radius: 12px;
  margin: 2rem 0 1.5rem 0;
`;

export const UploadedImageLink = styled.div`
  position: relative;
  background: #F6F8FB;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  line-height: 1;
  display: flex;
  align-items: stretch;

  input{
    flex-grow: 1;
    background: transparent;
    border: none;
    outline: none;
    padding: 1rem 4px 1rem 1.5rem;
    font-family: 'Poppins','sans-serif';
    font-size: 1.6rem;
    font-weight: 500;
    color: #4F4F4F;
  }

  button{
    font-size: 1.5rem;
    line-height: 1;
    background-color: #2F80ED;
    color: #fff;
    border: none;
    outline: none;
    padding: 0 1.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  color: #A9A9A9;
  font-size: 1.5rem;

  a{
    color: #A9A9A9;
    font-weight: 700;
  }
`;