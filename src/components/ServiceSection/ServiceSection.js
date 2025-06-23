import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import { fetchServices } from "../../store/slices/services";

const ServiceSection = ({
  hclass,
  sliceStart = 0,
  sliceEnd = 3,
  showSectionTitle = true,
  AllServices = true,
}) => {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const ClickHandler = () => window.scrollTo(10, 0);

  return (
    <section className={hclass}>
      <div className="container mx-auto px-4">
        {showSectionTitle && (
          <div className="row justify-center">
            <div className="col-lg-9 col-12">
              <SectionTitle
                title="Departmental Services"
                subtitle="Our Medical Services"
              />
            </div>
          </div>
        )}

        <div className="row flex flex-wrap">
          {loading && <p>Loading services...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {!loading &&
            !error &&
            services.slice(sliceStart, sliceEnd).map((service, index) => (
              <div className="col-lg-4 col-md-6 col-12 px-4" key={index}>
                <div className="service-card relative z-10 bg-white text-center mt-20 mb-8 px-9 py-12 pb-8 rounded-2xl shadow-custom">
                  {/* Background shape */}
                  <div className="absolute left-1/2 top-9 w-[210px] h-[70px] bg-no-repeat bg-center transform -translate-x-1/2 -translate-y-1/2"></div>
                  
                  {/* Icon container */}
                  <div className="icon relative mx-auto -mt-24 w-26 h-26 rounded-full bg-gradient-to-b from-[#A58532] via-[#B59542] to-[#f0db83]">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover rounded-full p-2"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="content">
                    <h2 className="text-6xl font-normal leading-[100px] mt-10">
                      {service.name}
                    </h2>
                    <p className="text-[#767676] text-lg font-normal leading-8 my-4">
                      {service.description}
                    </p>
                    <Link
                      onClick={ClickHandler}
                      to={`/service-single/${service.slug}`}
                      className="block pb-1"
                    >
                      <i className="flaticon-right-arrow text-3xl text-[#0080D2] transition-all duration-300 ease-in-out ml-0 mb-1 hover:text-[#000B47] hover:ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          {AllServices && (
            <div className="col-12 w-full text-center mt-8">
              <Link
                onClick={ClickHandler}
                to="/services"
                className="theme-btn inline-block px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-xl"
              >
                See All Services
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;