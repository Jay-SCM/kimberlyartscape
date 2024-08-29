import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [files, setFiles] = useState<FileList | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(event.target.files);
    };

    const handleUpload = async () => {
        if (files) {
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('files', files[i]);
            }

            try {
                await axios.post('http://localhost:7070/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                alert('Files uploaded successfully!');
            } catch (error) {
                console.error('Error uploading files:', error);
            }
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Files</button>
        </div>
    );
};

export default FileUpload;
