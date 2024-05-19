import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="my-2 background">
      <div className="row p-3">
        <div className="col-12 col-md-7 my-2 mx-3">
          <span className="custom-heading">Get in Touch</span>
          <span className="custom-text">
            Have a question or want to work together? Fill out the form and I'll
            get back to you as soon as possible.
          </span>
        </div>
        <div className="col-12 col-md-4 my-2 mx-1 p-5 rounded-bottom" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
          <form>
            <div className="mb-3 my-2">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-dark my-2 custom-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div className="row container p-3">
          <span className="fw-bold head">Contact Information</span>
          <div className="mt-3">
            <div className="d-flex align-items-center">
                <span className="me-2 icon">
                    <IoLocationOutline />
                </span>
                <h2 className="mb-0 add">
                    Preet Makeover, Sangram Nagar, Aurangabad, Maharashtra-431005
                </h2>
            </div>
            <div className="d-flex align-items-center mt-3">
                <span className="me-2 icon">
                    <IoCallOutline /> 
                </span>
                <h2 className="mb-0 add">
                   +91 9146585763
                </h2>
            </div>
            <div className="d-flex align-items-center mt-3">
                <span className="me-2 icon">
                <IoMailOutline />
                </span>
                <h2 className="mb-0 add">
                  mailto:rohit98waghmare@gmail.com
                </h2>
            </div>
            <div className="mt-3 d-flex align-items-center">
            <span className="me-3 icon"><FaInstagram /></span>
            <span className="me-3 icon"><FaWhatsapp /></span>
            <span className="me-3 icon"><AiOutlineYoutube /></span>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
