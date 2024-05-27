import React, { useContext, useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DarkModeContext } from './context/DarkModeContext';
import { UserContext } from './context/UserContext'; 
import '../App.css';

export function Signin({ showModal, handleCloseModal }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { isDarkMode } = useContext(DarkModeContext);
  const { setUser } = useContext(UserContext); 
  const modalRef = useRef(null);

  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    cpassword: '',
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch('http://localhost:5000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      setUser({ name, email }); 
      handleCloseModal();
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      setUser({ name: json.name, email: credentials.email }); 
      handleCloseModal();
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalRef, handleCloseModal]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        showModal ? 'block' : 'hidden'
      }`}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-md sm:max-w-lg p-4 bg-white rounded-md shadow-lg overflow-y-auto mx-2 sm:mx-auto"
        style={{ maxHeight: '90vh' }}
      >
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Signin</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <form onSubmit={handleLogin}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-black">Welcome!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label className="text-black" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      className="text-black"
                      id="email"
                      name="email"
                      type="email"
                      onChange={onChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-black" htmlFor="password">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        className="text-black"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        onChange={onChange}
                      />
                      <button
                        type="button"
                        className={`absolute inset-y-0 right-0 px-2 flex items-center ${
                          isDarkMode ? 'text-white' : 'text-black'
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
                </CardContent>
                <CardFooter>
                  <Button
                    className={`mt-3 w-full ${
                      isDarkMode
                        ? 'bg-gray-800 text-white hover:bg-gray-800 hover:text-white'
                        : 'bg-gray-200 text-black hover:bg-gray-200 hover:text-black'
                    }`}
                  >
                    Signin
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
          <TabsContent value="signup">
            <form onSubmit={handleSignup}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-center text-black">Create Your Account</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label className="text-black" htmlFor="name">
                      Name
                    </Label>
                    <Input
                      className="text-black"
                      id="name"
                      name="name"
                      type="text"
                      onChange={onChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-black" htmlFor="email">
                      Email
                    </Label>
                    <Input
                      className="text-black"
                      id="email"
                      name="email"
                      type="email"
                      onChange={onChange}
                    />
                  </div>
                  <div className="space-y-1">
                    <Label className="text-black" htmlFor="current">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        className="text-black"
                        id="current"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        onChange={onChange}
                      />
                      <button
                        type="button"
                        className={`absolute inset-y-0 right-0 px-2 flex items-center ${
                          isDarkMode ? 'text-white' : 'text-black'
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
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="cpassword"
                        onChange={onChange}
                      />
                      <button
                        type="button"
                        className={`absolute inset-y-0 right-0 px-2 flex items-center ${
                          isDarkMode ? 'text-white' : 'text-black'
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
                    type="submit"
                    className={`mt-3 w-full ${
                      isDarkMode
                        ? 'bg-gray-800 text-white hover:bg-gray-800 hover:text-white'
                        : 'bg-gray-200 text-black hover:bg-gray-200 hover:text-black'
                    }`}
                  >
                    Signup
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
