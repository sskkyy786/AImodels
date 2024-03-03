import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Explore from "./Explore";

export default function Card(props) {
  const [sample, setSample] = useState([]);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleModelClick = (model) => {
    setSelectedModel(model);
  };

  const loadSampleData = async () => {
    try {
      let response = await fetch("http://localhost:4000/api/modelSampleData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      response = await response.json();
      setSample(response[0]);
    } catch (error) {
      console.error("Error loading sample data:", error);
    }
  };

  useEffect(() => {
    loadSampleData();
  }, []);

  const selectedModelDetails = sample.find(
    (model) => model.name === selectedModel?.name
  );

  console.log(selectedModelDetails);

  return (
    <div>
      <div
        class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5"
        tabindex="-1"
        role="dialog"
        id="modalSheet"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-4 shadow">
            <div class="modal-header border-bottom-0" >
              <h1 class="modal-title fs-5" >{props.modelname}</h1>
              <button
                style={{border:'none' , backgroundColor:'transparent'}}
                
                
                
              >❦</button>
            </div>
            <div class="modal-body " style={{height:'150px' , backgroundColor:'#e6e6fa' , fontFamily:'monospace' , fontSize:'14px' , paddingTop:'20px'}}>
              <p> {props.modeldesc}</p>
            </div>
            <div class="modal-body py-0" style={{backgroundColor:'#e6e6fa' , fontFamily:'monospace' , fontWeight:'600px'}}>
              {props.modelcat}
            </div>
            <div class="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0" style={{backgroundColor:'#e6e6fa'}}>
            <Link type="button" className="btn btn-primary" to="/explore">
  Read More
</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
