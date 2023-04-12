import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import Img from "../assets/acoustic/gibson1.webp";
import { getDocs, collection, doc, updateDoc } from "firebase/firestore";

const Acoustic = () => {
  const [guitar, setGuitar] = useState([]);

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
        <div className="flex">
          <img src={Img} alt="" className="h-[600px]" />
        </div>
        {guitar?.map((elem) => (
          <div className="flex flex-col items-center">
            <p>{elem.model}</p>
            <p>{elem.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Acoustic;
