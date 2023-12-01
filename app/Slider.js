import React from 'react';
const Slider = () => {
  return (
    
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src="https://pixosoft.com/images/sliders/pixosoft-slider-3.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://ithinkbigger.com/wp-content/uploads/2022/03/eCommerce-Website-Components-photo.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src="https://4.imimg.com/data4/TX/JE/GLADMIN-30141012/wp-content-uploads-2016-05-indiabbazaar-e-commerce.jpg" alt="Third slide" />
            </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default Slider;
