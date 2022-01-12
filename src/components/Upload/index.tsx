/* eslint-disable react/require-default-props */
import React, { ReactNode, useState, useCallback } from 'react';
import Dropzone from 'react-dropzone';

import { FiUploadCloud } from 'react-icons/fi';

import { DropContainer, UploadMessage } from './styles';

interface UploadProps {
  onUpload: (file: File) => void;
  fileUrl?: string;
}

export default function Upload({
  onUpload,
  fileUrl = '',
}: UploadProps): JSX.Element {
  const [file, setFile] = useState('');

  const [selectedFileUrl, setSelectedFileUrl] = useState(fileUrl);

  function renderDragMessage(
    isDragActive: boolean,
    isDragRejest: boolean,
  ): ReactNode {
    if (!isDragActive) {
      return (
        <UploadMessage>
          <FiUploadCloud size={24} />
          Drag the file here.
        </UploadMessage>
      );
    }

    if (isDragRejest) {
      return <UploadMessage type="error">File not accepted</UploadMessage>;
    }

    return <UploadMessage type="success">Drag the file</UploadMessage>;
  }

  const handlerUpload = useCallback(
    files => {
      setFile(URL.createObjectURL(files[0]));
      onUpload(files[0]);

      setSelectedFileUrl(files[0].path);
    },
    [onUpload],
  );

  return (
    <div style={{ marginBottom: 12 }}>
      <Dropzone
        accept="image/jpeg,image/png,.pdf"
        onDropAccepted={files => handlerUpload(files)}
        multiple={false}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }): any => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject || !file}
          >
            <input {...getInputProps()} data-testid="upload" />

            {renderDragMessage(isDragActive, isDragReject)}

            {selectedFileUrl && selectedFileUrl.indexOf('.pdf') === -1 && (
              <img src={file} alt="point thumbnail" />
            )}

            {selectedFileUrl && selectedFileUrl.indexOf('.pdf') !== -1 && (
              <embed src={file} />
            )}
          </DropContainer>
        )}
      </Dropzone>
    </div>
  );
}
