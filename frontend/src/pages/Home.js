import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  const [model, setModel] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:4000/api/modelData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response = await response.json();
      setModel(response[0]);
    } catch (error) {
      console.error("Error loading model data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="" style={{overflowX:'hidden'}}>
      <Navbar />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"> */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 p-4">
        {model && model.length !== 0
          ? model.map((data) => (
              <div key={data._id}>
                <Card
                  modelname={data.name}
                  modelcat={data.CategoryName}
                  modeldesc={data.desc}
                />
              </div>
            ))
          : ""}
      </div>
      <div style={{ backgroundColor:'#e6e6fa' , height:'50px'}}>
      <Footer/>
      </div>
    </div>

  );
}
