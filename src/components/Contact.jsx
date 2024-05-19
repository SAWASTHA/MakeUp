import React from "react";
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="my-2 background">
      <div className="container p-3">
        <div className="row">
          <div className="col-12 col-md-7 my-2">
            <h2 className="custom-heading display-4">Get in Touch</h2>
            <p className="custom-text lead">
              Have a question or want to work together? Fill out the form and I'll
              get back to you as soon as possible.
            </p>
          </div>
          <div className="col-12 col-md-5 my-2 p-4 rounded-bottom bg-light-opacity">
            <form>
              <div className="mb-3">
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
        <div className="row mt-4">
          <h3 className="fw-bold head">Contact Information</h3>
          <div className="col-12">
            <div className="d-flex align-items-center mt-3">
              <IoLocationOutline className="me-2 icon" />
              <p className="mb-0 add">
                Preet Makeover, Sangram Nagar, Aurangabad, Maharashtra-431005
              </p>
            </div>
            <div className="d-flex align-items-center mt-3">
              <IoCallOutline className="me-2 icon" />
              <p className="mb-0 add">+91 9146585763</p>
            </div>
            <div className="d-flex align-items-center mt-3">
              <IoMailOutline className="me-2 icon" />
              <p className="mb-0 add">rohit98waghmare@gmail.com</p>
            </div>
            <div className="d-flex align-items-center mt-3">
              <a href="https://instagram.com" className="me-3 icon"><FaInstagram /></a>
              <a href="https://wa.me" className="me-3 icon"><FaWhatsapp /></a>
              <a href="https://youtube.com" className="me-3 icon"><AiOutlineYoutube /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
