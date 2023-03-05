import React from 'react';
import axios from 'axios';
import { auth, googleAuthProvider } from '../lib/firebase';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const user = null;
  const username = null;

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
    } catch (err) { console.log(err); }
  };

  const singOutFromGoogle = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.log(err);
    }
  };

  // const fileUpload = async ()=>{
  //   // Makes reference to the storage bucket location
  //   const ref = storage.ref(
  //     `uploads/${auth.currentUser.uid}/${Date.now()}.${extension}`
  //   );
  //   setUploading(true);

  //   // Starts the upload
  //   const task = ref.put(file);

  //   // Listen to updates to upload task
  //   task.on(STATE_CHANGED, (snapshot) => {
  //     const pct = (
  //       (snapshot.bytesTransferred / snapshot.totalBytes) *
  //       100
  //     ).toFixed(0);
  //     setProgress(pct);

  //     // Get downloadURL AFTER task resolves (Note: this is not a native Promise)
  //     task
  //       .then((d) => ref.getDownloadURL())
  //       .then((url) => {
  //         setDownloadURL(url);
  //         setUploading(false);
  //       });
  //   });
  // }

  const fetchPosts = async (id) => {
    if (id) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/posts/${id}`,
        );
        console.log(response);
        return response.data;
      } catch (err) {
        console.log(err);
      }
    }
    const response = await axios.get('api/posts');
    return response.data;
  };

  // refatoring
  return (
    <GlobalContext.Provider
      value={{ fetchPosts, signInWithGoogle, singOutFromGoogle, user, username }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
