import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import Img from "../assets/acoustic/gibson1.webp";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";

//Get a reference to firebase storage
const storage = getStorage();

//Create a reference to the image file in Firebase Storage
const imageRef = ref(storage, "guitars-acoustic/");

const Acoustic = () => {
  const [guitar, setGuitar] = useState([]);

  //Create a reference to the collection
  const guitarCollectionRef = collection(db, "acoustic");

  const getGuitarList = async () => {
    try {
      const data = await getDocs(guitarCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
      setGuitar(filteredData);

      // Loop through the filteredData array and update each guitar document with the image URL
      filteredData.forEach((guitar) => {
        getDownloadURL(ref(storage, guitar.imageUrl)).then((url) => {
          const productRef = doc(db, "acoustic", guitar.id);
          updateDoc(productRef, { imageUrl: url });
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGuitarList();
  }, []);

  return (
    <section className="container m-auto grid">
      <div className="flex flex-col items-center border border-sky-600">
        {guitar?.map((elem) => (
          <>
            <div className="flex">
              <img src={elem.imageUrl} alt="" className="h-[600px]" />
            </div>
            <div className="flex flex-col items-center">
              <p>{elem.model}</p>
              <p>{elem.price}</p>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Acoustic;
