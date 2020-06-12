// firebase
import firebase from 'firebase/app';
import firebaseConfig from './firebase-config';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const storage = firebase.storage();
const auth = firebase.auth();

export const fbAuthListener = (cal) => {

  auth.onAuthStateChanged(user => {
    if (user) {
      cal(true);
    } else {
      cal(false);
    }
  })
}

export const fbSignout = () => {

  auth.signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
    console.log(error)
  });
}

export const fbSignin = async (id, pw) => {

  try {
    await auth.signInWithEmailAndPassword(id, pw);
    return true;
  } catch (err) {
    console.log(err)
    return false;
  }
}

// OFFLINE
export const fbDataSetting = async () => {
  console.log('- fbDataSetting -')
  try {
    await db.settings({
      cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
    });
    await db.enablePersistence()

  } catch (err) {
    console.log(err)
    if (err === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  }
}

// FIRESTORE
export const fbGetData = async (col, order, desc) => {

  try {
    const result = [];
    const ref = await db.collection(col);

    const arr = await ref.orderBy(order, desc).get();
    arr.forEach(doc => {
      const obj = {
        ...doc.data(),
        id: doc.id,
      }
      result.push(obj);
    })

    return result;
  } catch (error) {
    console.log(error)

  }


}

export const fbUploadData = async (col, data) => {

  try {
    const upload = await db.collection(col).add({
      ...data,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    const id = await upload.id;
    console.log('upload is complete');
    return id;
  } catch (err) {
    console.log(err)
  }
}

export const fbUpdateData = async (col, id, data) => {

  try {
    const ref = db.collection(col).doc(id);
    await ref.update(data);
    console.log('update is complete');
  } catch (err) {
    console.log(err);
  }
}

export const fbDeleteData = async (col, doc) => {

  try {
    await db.collection(col).doc(doc).delete();
    console.log('delete data is complete')
  } catch (err) {
    console.log(err)
  }
}

// STORAGE
export const fbUploadStorage = async (path, name, file) => {

  // Create a root reference
  try {
    const storageRef = storage.ref();
    const ref = await storageRef.child(`${path}/${name}`);
    await ref.put(file);
    const fileUrl = await ref.getDownloadURL();
    const prevFile = `${path}/${name}`;
    return {
      fileUrl,
      prevFile,
    }
  } catch (err) {
    console.log(err)
  }
}

export const fbDeleteStorage = async (path) => {

  try {
    const storageRef = storage.ref();
    var ref = storageRef.child(`${path}`);
    await ref.delete()
    console.log('delete complete');
  } catch (err) {
    console.log(err);
  }
}

export const fbUpdateStorage = async (prevpath, uploadpath, filename, file) => {

  try {
    fbDeleteStorage(prevpath);
    const result = await fbUploadStorage(uploadpath, filename, file);
    return result;
  } catch (err) {
    console.log(err);
  }
};


// state
export const uploadStateData = (data, newData, dir) => {

  if (!dir) {
    return [newData, ...data];
  } else {
    return [...data, newData];
  }
}
export const updateStateData = (data, id, newData) => {

  return data.map(el => {
    if (el.id === id) {
      return newData
    } else {
      return el
    }
  })
}
export const deleteStateData = (data, id) => {

  return data.filter(el => {
    return el.id !== id
  })
}

export const getThumbnail = (html, cal) => {
  if (html.files && html.files[0]) {
    var reader = new FileReader();
    reader.onload = async (e) => {
      const url = e.target.result
      const name = html.files[0].name;
      cal(name, url)
    }
    reader.readAsDataURL(html.files[0]);
  }
}

export const isDataFilled = (data) => {

  let result = true;

  Object.keys(data).forEach(el => {
    console.log(data[el]);
    if (!data[el]) {
      result = false;
    }
  })

  return result;
}