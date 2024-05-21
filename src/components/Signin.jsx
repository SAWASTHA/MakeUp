import React, { useContext, useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DarkModeContext } from "./context/DarkModeContext";
import "../App.css";
// import GoogleButton from "react-google-button";

export function Signin({ showModal, handleCloseModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);
  const modalRef = useRef(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, handleCloseModal]);

  

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        showModal ? "block" : "hidden"
      }`}
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-md sm:max-w-lg p-4 bg-white rounded-md shadow-lg overflow-y-auto mx-2 sm:mx-auto"
        style={{ maxHeight: "90vh" }}
      >
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Signin</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-black">
                  Welcome!
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label className="text-black" htmlFor="email">
                    Email
                  </Label>
                  <Input className="text-black" id="email" type="email" />
                </div>
                <div className="space-y-1">
                  <Label className="text-black" htmlFor="password">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      className="text-black"
                      id="password"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className={`absolute inset-y-0 right-0 px-2 flex items-center ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-black" />
                      ) : (
                        <FaEye className="text-black" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="text-right text-secondary fw-bolder fs-6">
                  <Link to="/">Forgot Password?</Link>
                </div>
                {/* <div className="flex justify-center ">
                <GoogleButton 
                  onClick={() => {
                    console.log("Google button clicked");
                  }}
                />
                </div> */}
              </CardContent>
              <CardFooter>
                <Button
                  className={`mt-3 w-full ${
                    isDarkMode
                      ? "bg-gray-800 text-white hover:bg-gray-800 hover:text-white"
                      : "bg-gray-200 text-black hover:bg-gray-200 hover:text-black"
                  }`}
                >
                  Signin
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-black">
                  Create Your Account
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label className="text-black" htmlFor="username">
                    Username
                  </Label>
                  <Input className="text-black" id="username" />
                </div>
                <div className="space-y-1">
                  <Label className="text-black" htmlFor="email">
                    Email
                  </Label>
                  <Input className="text-black" id="email" />
                </div>
                <div className="space-y-1">
                  <Label className="text-black" htmlFor="current">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      className="text-black"
                      id="current"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className={`absolute inset-y-0 right-0 px-2 flex items-center ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-black" />
                      ) : (
                        <FaEye className="text-black" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="space-y-1">
                  <Label className="text-black" htmlFor="new">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      className="text-black"
                      id="new"
                      type={showConfirmPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className={`absolute inset-y-0 right-0 px-2 flex items-center ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash className="text-black" />
                      ) : (
                        <FaEye className="text-black" />
                      )}
                    </button>
                  </div>
                </div>
                
              </CardContent>
              <CardFooter>
                <Button
                  className={`mt-3 w-full ${
                    isDarkMode
                      ? "bg-gray-800 text-white hover:bg-gray-800 hover:text-white"
                      : "bg-gray-200 text-black hover:bg-gray-200 hover:text-black"
                  }`}
                >
                  Signup
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
