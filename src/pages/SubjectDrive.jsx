import React, { useState } from "react";
import GooglePicker from "react-google-drive-picker";
import { googleCloud } from "../utils/f_config";



const CLIENT_ID = googleCloud.clientId;
const API_KEY = googleCloud.apiKey;
const SCOPES = "https://www.googleapis.com/auth/drive.file";


const SubjectDrive = () => {
  const [openPicker, setOpenPicker] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handlePickerClick = () => {
    setOpenPicker(true);
  };

  const handleFileSelection = (data) => {
    if (data.action === 'picked') {
      setSelectedFiles(data.docs);
    }
    setOpenPicker(false);
  };

  return (
    <div>
      <h1>Google Drive Picker</h1>
      <button onClick={handlePickerClick}>Open Google Drive Picker</button>

      <GooglePicker
        clientId={CLIENT_ID}
        developerKey={API_KEY}
        scope={SCOPES}
        onChange={handleFileSelection}
        onAuthFailed={(data) => console.error("Auth failed:", data)}
        multiselect={true}
        navHidden={true}
        authImmediate={false}
        mimeTypes={["image/png", "image/jpeg", "application/pdf"]}
        viewId={"DOCS"}
        open={openPicker}
      />
      
      {selectedFiles.length > 0 && (
        <div>
          <h2>Selected Files</h2>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                <a href={file.url} target="_blank" rel="noopener noreferrer">
                  {file.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubjectDrive;
