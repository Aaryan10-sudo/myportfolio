"use client";

import Location from "@/ui/Location";
import Phone from "@/ui/Phone";
import React, { useState } from "react";
import Mail from "../ui/Mail";
import AnimatedContact from "@/animation/contactAnimation";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <section
      className="flex sm:flex-row flex-col gap-[30px] font-manrope w-full sm:justify-center py-24 sm:divide-x sm:gap-[100px]"
      id="contact"
    >
      <div className="flex flex-col gap-5 mx-5 pr-5">
        {" "}
        <h1 className="font-extrabold text-[30px] font-manrope">
          Get in touch
        </h1>
        <p>Fill in the form to start a conversation</p>
        <span className="flex flex-col gap-3">
          <p className="flex items-center gap-2">
            <Location /> Fake Address , Kathmandu
          </p>
          <p className="flex items-center gap-2">
            <Phone /> +977 9761637657
          </p>
          <p className="flex items-center gap-2">
            <Mail />
            lazyfox916@gmail.com
          </p>
        </span>
      </div>

      <form className="flex flex-col gap-5 sm:pl-10 mx-5 ">
        {" "}
        <span>
          <label>Full Name</label>
          <br />
          <input
            type="text "
            className="h-[40px] w-full sm:w-[300px] text-black rounded-md p-2"
            placeholder="Full Name"
          />
        </span>
        <span>
          <label>Email</label>
          <br />
          <input
            type="email"
            className="h-[40px] w-full sm:w-[300px] text-black rounded-md p-2"
            placeholder="Email"
          />
        </span>
        <span>
          <label>Message</label>
          <br />
          <textarea
            className="w-full sm:w-[300px] h-[120px] text-black rounded-tr-[30px] rounded-bl-[30px] p-2"
            placeholder="Message..."
          />
        </span>
        <button className="bg-primary text-white w-[100px] self h-[35px] font-bold rounded-sm md:self-end">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
