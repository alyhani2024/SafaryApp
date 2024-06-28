"use client"
import Link from "next/link";
import { useState } from "react";
import SigninPage from "../signin/page";

const SignupPage = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userRole, setUserRole] = useState('tourist'); // Default role is tourist
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fullName: '',
    userName: '',
    email: '',
    image: null,
    password: '',
    confirmPassword: '',
    address: '',
    phoneNumber: '',
    cv: null,
    description: '',
    hourPrice: '',
    age: '',
    bio: '',
    languagesSpoken: '',
    hasCar: false
  });
  const [showSignIn, setShowSignIn] = useState(false);

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = userRole === 'tourist'
      ? 'https://safaryapi.runasp.net/api/Account/Register-As-User'
      : 'https://safaryapi.runasp.net/api/Account/Register-As-TourGuide';

    const form = new FormData();
    form.append('FirstName', formData.firstName);
    form.append('LastName', formData.lastName);
    form.append('FullName', formData.fullName);
    form.append('UserName', formData.userName);
    form.append('Email', formData.email);
    form.append('Image', formData.image);
    form.append('Password', formData.password);
    form.append('ConfirmPassword', formData.confirmPassword);
    form.append('Address', formData.address);
    form.append('PhoneNumber', formData.phoneNumber);

    if (userRole === 'tourGuide') {
      form.append('CV', formData.cv);
      form.append('Description', formData.description);
      form.append('HourPrice', formData.hourPrice);
      form.append('Age', formData.age);
      form.append('Bio', formData.bio);
      form.append('LanguagesSpoken', formData.languagesSpoken);
      form.append('HasCar', formData.hasCar);
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: form,
      });
      const data = await response.json();
      console.log(data); // Handle the response as needed
    } catch (error) {
      console.error('Error:', error); // Handle errors as needed
    }
  };

  return (
    <>
      {showSignIn ? (
        <SigninPage />
      ) : (
        <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[500px] rounded bg-white px-6 py-10 shadow-three dark:bg-dark sm:p-[60px]">
                  <h3 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                    Create your account
                  </h3>
                  <p className="mb-11 text-center text-base font-medium text-body-color">
                    It’s totally free and super easy
                  </p>
                  <button className="border-stroke mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/5 hover:text-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-orange-500 dark:hover:bg-orange-500/5 dark:hover:text-orange-500 dark:hover:shadow-none">
                    <span className="mr-3">
                      <img src="/path-to-google-icon.png" alt="Google Icon" />
                    </span>
                    Sign in with Google
                  </button>

                  <button className="border-stroke mb-6 flex w-full items-center justify-center rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 hover:border-orange-500 hover:bg-orange-500/5 hover:text-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:hover:border-orange-500 dark:hover:bg-orange-500/5 dark:hover:text-orange-500 dark:hover:shadow-none">
                    <span className="mr-3">
                      <img src="/path-to-github-icon.png" alt="Github Icon" />
                    </span>
                    Sign in with Github
                  </button>
                  <div className="mb-8 flex items-center justify-center">
                    <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                    <p className="w-full px-5 text-center text-base font-medium text-body-color">
                      Or, register with your email
                    </p>
                    <span className="hidden h-[1px] w-full max-w-[60px] bg-body-color/50 sm:block"></span>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                      <label
                        htmlFor="firstName"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="lastName"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="fullName"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your full name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="userName"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        User Name
                      </label>
                      <input
                        type="text"
                        name="userName"
                        placeholder="Enter your user name"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="image"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Profile Image
                      </label>
                      <input
                        type="file"
                        name="image"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="password"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="confirmPassword"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="address"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="phoneNumber"
                        className="mb-3 block text-sm text-dark dark:text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                        onChange={handleInputChange}
                      />
                    </div>

                    {userRole === 'tourGuide' && (
                      <>
                        <div className="mb-8">
                          <label
                            htmlFor="cv"
                            className="mb-3 block text-sm text-dark dark:text-white"
                          >
                            CV
                          </label>
                          <input
                            type="file"
                            name="cv"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                            onChange={handleFileChange}
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="description"
                            className="mb-3 block text-sm text-dark dark:text-white"
                          >
                            Description
                          </label>
                          <input
                            type="text"
                            name="description"
                            placeholder="Enter a description"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="hourPrice"
                            className="mb-3 block text-sm text-dark dark:text-white"
                          >
                            Hourly Price
                          </label>
                          <input
                            type="number"
                            name="hourPrice"
                            placeholder="Enter your hourly price"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="age"
                            className="mb-3 block text-sm text-dark dark:text-white"
                          >
                            Age
                          </label>
                          <input
                            type="number"
                            name="age"
                            placeholder="Enter your age"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="bio"
                            className="mb-3 block text-sm text-dark dark:text-white"
                          >
                            Bio
                          </label>
                          <input
                            type="text"
                            name="bio"
                            placeholder="Enter your bio"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="languagesSpoken"
                            className="mb-3 block text-sm text-dark dark:text-white"
                          >
                            Languages Spoken
                          </label>
                          <input
                            type="text"
                            name="languagesSpoken"
                            placeholder="Enter languages spoken"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-orange-500 dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-orange-500 dark:focus:shadow-none"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mb-8">
                          <label
                            htmlFor="hasCar"
                            className="mb-3 block text-sm text-dark dark:text-white"
                          >
                            Do you have a car?
                          </label>
                          <input
                            type="checkbox"
                            name="hasCar"
                            className="mr-2"
                            onChange={handleCheckboxChange}
                          />
                        </div>
                      </>
                    )}

                    <div className="mb-8">
                      <p className="mb-3 block text-sm text-dark dark:text-white">Select Your Role</p>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          id="tourist"
                          name="role"
                          value="tourist"
                          checked={userRole === 'tourist'}
                          onChange={handleRoleChange}
                          className="mr-2"
                        />
                        <label htmlFor="tourist" className="mr-6 text-sm text-dark dark:text-white">Tourist</label>
                      
                        <input
                          type="radio"
                          id="tourGuide"
                          name="role"
                          value="tourGuide"
                          checked={userRole === 'tourGuide'}
                          onChange={handleRoleChange}
                          className="mr-2"
                        />
                        <label htmlFor="tourGuide" className="text-sm text-dark dark:text-white">Tour Guide</label>
                      </div>
                    </div>
                    <div className="mb-8 flex">
                      <label
                        htmlFor="checkboxLabel"
                        className="flex cursor-pointer select-none text-sm font-medium text-body-color"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id="checkboxLabel"
                            className="sr-only"
                          />
                          <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border border-body-color border-opacity-20 dark:border-white dark:border-opacity-10">
                            <span className="opacity-0">
                              <svg
                                width="11"
                                height="8"
                                viewBox="0 0 11 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                  fill="#3056D3"
                                  stroke="#3056D3"
                                  strokeWidth="0.4"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <span>
                          By creating account means you agree to the
                          <a href="#0" className="text-orange-500 hover:underline">
                            {" "}
                            Terms and Conditions{" "}
                          </a>
                          , and our
                          <a href="#0" className="text-orange-500 hover:underline">
                            {" "}
                            Privacy Policy{" "}
                          </a>
                        </span>
                      </label>
                    </div>
                    <div className="mb-6">
                      <button type="submit" className="flex w-full items-center justify-center rounded-sm bg-orange-500 px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-orange-500/90 dark:shadow-submit-dark">
                        Sign up
                      </button>
                    </div>
                  </form>
                  <p className="text-center text-base font-medium text-body-color">
                    Already using Startup?{" "}
                    <button
                      className="text-orange-500 hover:underline"
                      onClick={handleSignInClick}
                    >
                      Sign in
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SignupPage;
