import React from "react";

const Service = () => {
  return (
    <div id="services">
      <br />
      <h1 className="font-Sora font-extrabold text-[40px] ">Services</h1>
      <br />
      <div className="flex md:justify-between justify-center items-center flex-wrap md:gap-0 sm:gap-[20px] gap-[5px] text-center">
        <div className="flex bg-[url('/public/web-design1.png')] bg-center bg-cover h-[210px] sm:w-[250px] w-[190px] text-white text-center justify-center items-end">
          <span className="bg-[rgba(0,0,0,0.5)] font-extrabold w-full py-[10px]">
            Static Web Development
          </span>
        </div>
        <div className="flex bg-[url('/public/course_thumbnail_113.jpg')] bg-center bg-cover h-[210px] sm:w-[250px] w-[190px] text-white text-center justify-center items-end">
          <span className="bg-[rgba(0,0,0,0.5)] font-extrabold w-full py-[10px]">
            {" "}
            Fullstack Web Development
          </span>
        </div>
        <div className="flex bg-[url('/public/images.png')] bg-center bg-cover bg-no-repeat h-[210px] sm:w-[250px] w-[190px] text-white text-center justify-center items-end">
          <span className="bg-[rgba(0,0,0,0.5)] font-extrabold w-full py-[10px]">
            AWS Deployment
          </span>
        </div>
        <div className="flex bg-[url('/public/1280_720.png')] bg-center bg-cover h-[210px] sm:w-[250px] w-[190px] text-white text-center justify-center items-end">
          <span className="bg-[rgba(0,0,0,0.5)] font-extrabold w-full py-[10px]">
            Responsive WebSite
          </span>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Service;
