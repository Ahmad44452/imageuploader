import { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Container,
  SubContainer,
  Heading,
  SubHeading,
  UploadLabel,
  UploadedImgName,
  UploadButton,
  DownloadProgressBar,
  GreenTickImg,
  UploadedImage,
  UploadedImageLink,
  Footer
} from './Styles/index.styled';



export default function App() {

  // state to store files
  const [files, setFiles] = useState(null);

  // state to check if file is uploading
  const [isUploading, setUploading] = useState(false);

  // state to store img link
  const [imgLink, setImgLink] = useState(null);

  // state to check if file is uploaded
  const [isUploadingCompleted, setUploadingCompleted] = useState(false);

  // store file dragging state (to change ui)
  const [isFileDragging, setFileDragging] = useState(false);

  // set file dragging state to true (so that ui can change)
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileDragging(true);
  }

  // set file dragging state to false (so that ui can update)
  const handleDragExit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFileDragging(false);
  }

  // handle the file dropped in the drop zone
  const handleDrop = (e) => {
    e.preventDefault();
    // check if the dropped file is an image
    if (e.dataTransfer.files[0].type.substr(0, 5) === 'image') {
      setFiles(e.dataTransfer.files[0]);
    }

    // once image is dropped set file dragging to false (to update ui )
    setFileDragging(false);
  }

  // handle if image is chosen
  const handleChooseImage = (e) => {
    e.preventDefault();
    setFiles(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    formData.append('file', files);
    formData.append('upload_preset', 'image-uploader');

    const res = await axios.post(`https://api.cloudinary.com/v1_1/dnlwv3xqx/upload`, formData);
    setImgLink(res.data.secure_url);
    setUploading(false);
    setUploadingCompleted(true);
  }


  return (
    <>

      <Container>
        <SubContainer textAlign={isUploading ? 'left' : 'center'}>

          {
            !isUploading && !isUploadingCompleted &&
            <>
              <Heading>Upload your image</Heading>
              <SubHeading>File should be jpg,png,...</SubHeading>

              <UploadLabel htmlFor='image'
                isFileDragging={isFileDragging} // apply styles if user is hovering file
                onDragEnter={handleDragEnter}
                onDragOver={handleDragEnter}
                onDrop={handleDrop}
                onDragLeave={handleDragExit}
              >

                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z">
                  </path>
                </svg>

                <p>Click or drag and drop your image here</p>

              </UploadLabel>

              <input style={{ display: 'block', visibility: 'hidden' }} id='image' type="file" accept='image/*' onChange={handleChooseImage} />

              {
                // show upload button and file name if a file is selected
                files && (
                  <>
                    <UploadedImgName>{files.name}</UploadedImgName>
                    <UploadButton type="button" value="Upload" onClick={handleSubmit} />
                  </>
                )
              }

            </>

          }


          {
            isUploading && !isUploadingCompleted &&
            <>
              <Heading>Uploading...</Heading>
              <DownloadProgressBar></DownloadProgressBar>
            </>
          }

          {
            !isUploading && isUploadingCompleted &&
            <>
              <GreenTickImg>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z">
                  </path>
                </svg>
              </GreenTickImg>
              <Heading>Uploading Completed!</Heading>
              <UploadedImage src={imgLink} />

              <UploadedImageLink>
                <input value={imgLink} type={"text"} disabled />
                <CopyToClipboard text={imgLink}>
                  <button onClick={e => e.preventDefault()}>Copy Link</button>
                </CopyToClipboard>

              </UploadedImageLink>
            </>
          }

        </SubContainer>
        <Footer>
          Created by <a href='https://www.linkedin.com/in/ahmadghani/' target="_blank" rel="noreferrer">Ahmad Ghani</a> - devChallenges.io
        </Footer>
      </Container>



    </>
  )
}
