import { useState, useEffect } from 'react';

// Custom hook to create and manage an Object URL for a given image file
function useImageURL(imageFile) {
  const [imageURL, setImageURL] = useState(null);

  useEffect(() => {
    if (!imageFile) return;

    // Create Object URL when the component mounts
    const url = URL.createObjectURL(imageFile);
    setImageURL(url);

    // Cleanup function to revoke the URL when the component unmounts
    return () => {
      URL.revokeObjectURL(url); // Free memory when the component is unmounted or imageFile changes
    };
  }, [imageFile]); // Dependency array to re-run if imageFile changes

  return imageURL;
}

export default useImageURL;
