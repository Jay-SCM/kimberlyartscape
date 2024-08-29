// import React, { useState } from 'react';
// import { handleFileUpload } from '../utils/fileUploadUtils';

// const FileUpload = () => {
//     const [imageFile, setImageFile] = useState<File | null>(null);

//     const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setImageFile(event.target.files[0]);
//         }
//     };

//     const onSubmit = async (event: React.FormEvent) => {
//         if (imageFile) {
//             await handleFileUpload(event, imageFile);
//         } else {
//             alert('Please select an image file');
//         }
//     };

//     return (
//         <form onSubmit={onSubmit}>
//             <input type="file" onChange={onFileChange} />
//             <button type="submit">Upload</button>
//         </form>
//     );
// };

// export default FileUpload;
