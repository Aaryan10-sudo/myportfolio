import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useCreateMessageMutation } from "../../services/porfolioAPI";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Contact = () => {
  let [fullName, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  let [createPortfolio, { isLoading, isError, error, data, isSuccess }] =
    useCreateMessageMutation();
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      fullName,
      email,
      message,
    };
    createPortfolio(data);
  };

  useEffect(() => {
    {
      isSuccess
        ? toast.success(
            `Message received successfully please check your inbox`,
            setName(""),
            setEmail(""),
            setMessage("")
          )
        : null;
    }
    {
      isError ? toast.error(`An error has occured`) : null;
    }
  }, [isError, error, isSuccess]);
  return (
    <>
      <div id="contact">
        <ToastContainer />
        <h1 className="font-Sora font-extrabold text-[40px] 2xl:text-[60px]">
          Contact Me
        </h1>
        <br />
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-[20px] justify-between">
          <div className="">
            <form
              onSubmit={handleSubmit}
              className="bg-[#DCDCDC] h-[450px] sm:w-[500px] w-[100%] p-[30px]"
            >
              <p className="font-manrope text-black text-[25px]">Message me</p>
              <br />
              <br />
              <input
                type="text"
                placeholder="Your name here"
                className="text-black font-manrope h-[40px] w-[300px]"
                value={fullName}
                onChange={(e) => setName(e.target.value)}
              />
              <br />
              <br />
              <input
                type="text"
                placeholder="Your e-mail here"
                className="text-black font-manrope h-[40px] w-[300px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <textarea
                placeholder="Your message here"
                className="h-[100px] w-[300px] text-start align-text-top text-black"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <br />
              <br />
              <button
                type="submit"
                className="bg-[grey] h-[30px] w-[100px] text-white transform transition-all ease-in hover:scale-105 active:scale-90 text-center
              "
              >
                {isLoading ? (
                  <AiOutlineLoading3Quarters className="text-extrabold text-center flex justify-center ml-[45px] animate-spin" />
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
          <div className="w-[100%] sm:w-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14125.44136435104!2d85.35165633387003!3d27.737029619373317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1be5bea00987%3A0x70cf02a942554e97!2sKapan%2C%2044600!5e0!3m2!1sen!2snp!4v1727441862660!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <br />
      </div>
    </>
  );
};

export default Contact;
