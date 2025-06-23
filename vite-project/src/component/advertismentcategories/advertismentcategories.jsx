import carpic from '../image/car picture.jpg';
import React from 'react';
import carpic2 from '../image/car picture2 .jpg';
import carpic3 from '../image/car picture3.jpg';
import carpic4 from '../image/car picture4.jpg';

export function Advertisement(){
    return(
        <>
        <div className="container mt-4">
      {/* First Car */}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={carpic} // Replace with actual image
              alt="Kia Forte"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-success">Kia Forte</h5>
              <p className="card-text">
                The Kia Forte is a compact hatchback that offers a perfect combination of style, performance, and advanced technology. With its sleek and modern design, the Forte stands out on the...
              </p>
              <button className="btn btn-success">More Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Car */}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={carpic2} // Replace with actual image
              alt="Hyundai Elantra"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-success">Hyundai Elantra</h5>
              <p className="card-text">
                The Hyundai Elantra is a compact hatchback that offers a perfect combination of style, performance, and advanced technology. With its sleek and modern design, the Elantra stands out on the...
              </p>
              <button className="btn btn-success">More Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* Third Car */}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={carpic3} // Replace with actual image
              alt="Toyota Corolla"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-success">Toyota Corolla</h5>
              <p className="card-text">
                The Toyota Corolla is a compact hatchback that offers a perfect combination of style, performance, and advanced technology. With its sleek and modern design, the Corolla stands out on the...
              </p>
              <button className="btn btn-success">More Details</button>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Car */}
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={carpic4} // Replace with actual image
              alt="Volkswagen Golf"
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-success">Volkswagen Golf</h5>
              <p className="card-text">
                The Volkswagen Golf is a compact hatchback that offers a perfect blend of performance, practicality, and advanced technology. With its sleek and modern design, the Golf stands out on the...
              </p>
              <button className="btn btn-success">More Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}