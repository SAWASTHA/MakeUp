import React from "react";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { useDarkMode } from "./context/DarkModeContext";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

export default function Footer() {
  const { isDarkMode } = useDarkMode();
  const bgColor = isDarkMode ? "bg-black" : "bg-light";
  const textColor = isDarkMode ? "text-light" : "text-dark";

  return (
    <footer
      className={`bg-gray-900 text-gray-200 py-12 px-4 md:px-6 lg:px-8 ${bgColor}`}
    >
      <Container>
        <Row className={`justify-content-center mb-1 ${textColor}`}>
          <Col xs="auto">
            <div className="text-2xl font-bold">Preet Makeup</div>
          </Col>
        </Row>

        <Row className="justify-content-center mb-2">
          <Col xs="auto">
            <a className="mx-4 hover:text-gray-400" href="#">
              <IoLogoInstagram className="h-6 w-6" />
            </a>
          </Col>
          <Col xs="auto">
            <a className="mx-4 hover:text-gray-400" href="#">
              <FaWhatsapp className="h-6 w-6" />
            </a>
          </Col>
          <Col xs="auto">
            <a className="mx-4 hover:text-gray-400" href="#">
              <FaPhoneAlt className="h-6 w-6" />
            </a>
          </Col>
          <Col xs="auto">
            <a className="mx-4 hover:text-gray-400" href="#">
              <AiOutlineYoutube className="h-6 w-6" />
            </a>
          </Col>
        </Row>
        <Row className="justify-content-between">
          <Col md={4} className={`${textColor} mb-4`}>
            <h3 className="text-lg font-bold mb-4">Featured Products</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-400" to="#">
                  Luminous Foundation
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" to="#">
                  Velvet Matte Lipstick
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" to="#">
                  Radiant Highlighter
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" to="#">
                  Satin Blush
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className={`${textColor} mb-4`}>
            <h3 className="text-lg font-bold mb-4">Customer Support</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-gray-400" to="#">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" to="#">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" to="#">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-400" to="#">
                  FAQs
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className={`${textColor}`}>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Subscribe to our newsletter for exclusive offers and the latest
              beauty news.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                className="flex-1 bg-gray-800 border-none focus:ring-0 text-white px-3 py-2 placeholder-white-500 placeholder-opacity-50 mb-2 sm:mb-0"
                placeholder="Enter your email"
                type="email"
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mx-2 mb-2 rounded"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
