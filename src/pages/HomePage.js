import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "../styles/homepageStyle.css";
const HomePage = () => {

    return (
        <div className="container">
            <div className="d-flex header-section flex-column flex-md-row  mt-4 ">
                <div className="container pt-4   order-2 order-md-1">
                    <h1 className="display-2 header-title">
                        {" "}
                      Welcome to EarthDX (GITHUB webhook)   
                    </h1>
                    <p> We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.</p>
                    <div className="d-flex pt-5">
                        <button className="btn btn-success px-4 py-2">
                            {" "}
                            <strong> Join Now </strong>{" "}
                        </button>
                        <button className="ps-4 nav-link">
                            <span>
                                <strong className="pre-scrollable">
                                    Learn More {"  "}
                                </strong>
                            </span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>

                <div className="order-md-2">
                    <img
                        className="img-fluid "
                        src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1940798.jpg"
                        alt="image logo "
                    />
                </div>
            </div>

            <div className="container text-center mt-5 pt-5 mb-5">
                <h1 className="feature-title">
                    {" "}
                    Steps to Start
                    <span className="feature-title text-success pre-scrollable">
                        Your Plan Off Right
                    </span>
                </h1>
                <div className="d-flex flex-column container flex-wrap flex-md-row justify-content-center gap-5 mt-5 ">
                    <div className="item-card px-4 pb-3  col-sm-12 col-md-4 col-lg-3">
                        <img
                            className="img-fluid p-4"
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/plant-5293900-4432198.png"
                            alt=" plant image "
                        />
                        <h2> Inoculate</h2>
                        <p> Inoculate means to protect against disease, error, or harm. In the context of financial planning, inoculation means to protect against the risk of loss.</p>
                    </div>
                    <div className="item-card px-4 pb-3 col-sm-12 col-md-4 col-lg-3">
                        <img
                            className="img-fluid"
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/plant-6347424-5242126.png"
                            alt=" plant image "
                        />
                        <h2> Inoculate</h2>
                        <p> Inoculate means to protect against disease, error, or harm. In the context of financial planning, inoculation means to protect against the risk of loss.</p>
                    </div>
                    <div className="item-card px-4 pb-3 col-sm-12 col-md-4 col-lg-3">
                        <img
                            className="img-fluid "
                            src="https://cdn3d.iconscout.com/3d/premium/thumb/plant-pot-5663958-4719914.png"
                            alt=" plant image "
                        />
                        <h2> Inoculate</h2>
                        <p> Inoculate means to protect against disease, error, or harm. In the context of financial planning, inoculation means to protect against the risk of loss.</p>
                    </div>
                </div>
            </div>

            <div
                className="container section3 d-flex flex-column 
      flex-md-row mt-5 pt-5 justify-content-center align-items-center"
            >
                <div className="image-side col-sm-12 col-md-6 col-lg-5 ">
                    <img
                        className="img-fluid"
                        src="https://i.pinimg.com/736x/dd/60/b0/dd60b0ed3169b8aa469da1ee784bc088.jpg"
                        alt="image flower"
                    />
                </div>

                <div className="text-side ">
                    <h1 className="feature-title">Make Your Garden Good Nutrition</h1>
                    <ul>
                        <li>Improved plant growth and health: When you provide your garden with good nutrition, you are giving your plants the nutrients they need to grow strong and healthy. This can lead to improved yields, better disease resistance, and more vibrant colors and flavors in your produce</li>
                        <li> Good nutrition can help improve the structure of your soil, which can lead to better water retention and drainage. This can help your plants grow better and can also help prevent erosion and other soil problems.</li>
                        <li> Improved soil fertility: Good nutrition can help improve the fertility of your soil, which can lead to better yields and healthier plants.</li>
                    </ul>
                </div>
            </div>

            <div
                className="section4 mx-0 mx-lg-5 d-flex flex-column flex-md-row  justify-content-center       
      align-items-center 
      container"
            >
                <div className="text-side w-100 w-md-75  order-2 order-md-0">
                    <h1 className="feature-title">Come With Us Grow Up Your Plant</h1>
                    <p className="w-100 w-lg-50 pe-0 pe-md-5">
                    We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.
                    </p>

                    <button className="btn btn-success px-5 py-2 mt-4">
                    Discover More <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>

                <div className="image-side">
                    <img
                        className="img-fluid rounded-3"
                        src="https://img.freepik.com/free-photo/faux-watermelon-peperomia-plant-gray-pot_53876-110373.jpg?w=740&t=st=1689090817~exp=1689091417~hmac=3d894a048f16d3d703d59d3caaf24623a9cc6652c05615fe159743eca8b1cfd6"
                        alt=" plants on the pots"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
