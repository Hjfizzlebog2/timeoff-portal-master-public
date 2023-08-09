import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useLocation } from "react-router";
import { Typography } from "@mui/material";
import {
  doc,
  getDocs,
  query,
  collection,
  getFirestore,
} from "firebase/firestore";

function ManagerApproval(props) {
  const [data, setData] = useState(0);

  //Database Query
  const db = getFirestore();
  const q = query(collection(db, "testCollection", "12345", "CurrentRequests"));

  async function getData() {
    let docs = [];
    let i = 0;

    const qSnapshot = await getDocs(q);

    qSnapshot.forEach((doc) => {
      docs[i] = doc.data();
      console.log(doc.data());
      i++;
    });

    setData(docs);
  }

  useEffect(() => {
    getData();
  }, []);

  const DataDisplay = () => {
    if (data == 0) {
      return <p>Data is Loading...</p>;
    } else {
      return <p>Data Loaded</p>;
    }
  };

  return (
    <div className="App">
      <DataDisplay></DataDisplay>
    </div>
  );
}

export default ManagerApproval;
