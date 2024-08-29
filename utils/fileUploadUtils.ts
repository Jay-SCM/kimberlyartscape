// utils/fileUploadUtils.ts

import axiosInstance from '../utils/axiosinstance';
import { AxiosError } from 'axios';

export const handleFileUpload = async (event: React.FormEvent, imageFile: File) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('title', 'Art Title'); // Replace with dynamic data if needed
    formData.append('artist', 'Artist Name'); // Replace with dynamic data if needed
    formData.append('price', '$100'); // Replace with dynamic data if needed
    formData.append('description', 'Description here'); // Replace with dynamic data if needed
    formData.append('image', imageFile);

    try {
        await axiosInstance.post('/upload', formData);
        alert('Upload successful');
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // Handle AxiosError specifically
            console.error('Error uploading artwork:', error.response?.data || error.message || error);
        } else {
            // Handle other types of errors
            console.error('Unexpected error:', error);
        }
        alert('Error uploading artwork');
    }
};
