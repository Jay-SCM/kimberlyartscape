import axiosInstance from '../utils/axiosInstance'; 

export const handleFileUpload = async (event: React.FormEvent, imageFile: File) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('title', 'Art Title'); // Example title
    formData.append('artist', 'Artist Name'); // Example artist
    formData.append('price', '$100'); // Example price
    formData.append('description', 'Description here'); // Example description
    formData.append('image', imageFile); // `imageFile` should be a File object

    try {
        await axiosInstance.post('/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        alert('Upload successful');
    } catch (error) {
        console.error('Error uploading artwork:', error);
        alert('Error uploading artwork');
    }
};
