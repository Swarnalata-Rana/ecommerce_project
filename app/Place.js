import React from 'react';
const Place = () => {
  return (
    <div>
      <footer className="bg-body-tertiary text-center">
        {/* Grid container */}
        <div className="container p-4">
          {/* Section: Images */}
          <section className="">
            <div className="row">
              {/* Individual image items */}
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="col-lg-2 col-md-12 mb-4 mb-md-0">
                  <div
                    data-mdb-ripple-init
                    className="bg-image hover-overlay shadow-1-strong rounded"
                    data-ripple-color="light"
                  >
                    <img
                      src={`https://mdbcdn.b-cdn.net/img/new/fluid/city/11${index}.webp`}
                      className="w-100"
                      alt={`City ${index}`}
                    />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}></div>
      </footer>
    </div>
  );
};

export default Place;

