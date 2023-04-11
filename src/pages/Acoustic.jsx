import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";

import Img from "../assets/guitar2.jpeg";
import { getDocs, collection } from "firebase/firestore";

const Acoustic = () => {
  const [guitar, setGuitar] = useState([]);

  const guitarCollectionRef = collection(db, "acoustic");

  const getGuitar = async () => {
    try {
      const data = await getDocs(guitarCollectionRef);
      data.forEach((doc) => {
        setGuitar(doc.data());
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGuitar();
  }, []);

  return (
    <section className="container m-auto grid">
      <div className="flex flex-col items-center border border-sky-600">
        <div className="flex">
          <img src={Img} alt="" className="h-[600px]" />
        </div>
        <div className="flex flex-col items-center">
          <p>StringMaster</p>
          <p>2053</p>
        </div>
      </div>
    </section>
  );
};

export default Acoustic;
