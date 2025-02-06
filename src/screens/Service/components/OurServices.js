import React, { useState } from "react";
import { cwImg } from "../../../assets/MediaCall";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const OurServices = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "91",
    mobile: "",
    budget: "",
    companyName: "",
    projectDescription: "",
    file: null,
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
    setErrors({ ...errors, file: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile Number must be 10 digits.";
    }
    if (!formData.budget.trim()) newErrors.budget = "Budget is required.";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company Name is required.";
    if (!formData.projectDescription.trim())
      newErrors.projectDescription = "Project Description is required.";
    if (!formData.file) newErrors.file = "File upload is required.";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the Terms & Conditions.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      await axios.post("", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        email: "",
        country: "91",
        mobile: "",
        budget: "",
        companyName: "",
        projectDescription: "",
        file: null,
        termsAccepted: false,
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="relative w-[90%] mx-auto ">
      <div className=" rounded-[12px] overflow-hidden">
        <img src={cwImg.servicesBackground} alt="" className=" h-[calc(100vh-158px)] lg:h-[calc(100vh-88px)] w-full object-cover" />
      </div>

      <div className="flex lg:flex-col   items-center justify-between absolute top-1/2 left-0 transform -translate-y-1/2 w-full px-10">
        {/* Left Side - Text */}
        <div className="w-[55%] lg:w-full flex flex-col gap-10 lg:mb-10 lg:hidden">
          <h1 className="text-[54px] font-[600] leading-[14px] poppins text-[#FFFFFF]">
            Our Services
          </h1>
          <p className="text-[24px] font-[400] leading-[28.8px] poppins text-[#FFFFFF]">
            We are a fast-growing Mobile App Development Company with 100+
            in-house professionals, building mobile applications for over 8
            years with a 100% success rate and quality delivery.
          </p>
        </div>

        <div className="w-[60%] lg:w-full bg-white p-6 rounded-lg lg:h-[calc(100vh-168px)] ">
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-2">
              {/* Full Name and Email */}
              <div className="w-full flex lg:flex-wrap gap-5">
                <div className="w-[50%] lg:w-full">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="p-2 border rounded-full w-full"
                    required
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>
                <div className="w-[50%] lg:w-full">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="p-2 border rounded-full w-full"
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone Number and Budget */}
              <div className="w-full flex lg:flex-col  gap-5">
                <div className="w-[50%] lg:w-full">
                  <label className="block mb-1">Mobile</label>

                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile"
                    className="p-2 border rounded-full w-full"
                    required
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm">{errors.country}</p>
                  )}
                </div>
                <div className="w-[50%] lg:w-full">
                  <label>Budget</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="Budget"
                    className="p-2 border rounded-full w-full"
                    required
                  />
                  {errors.budget && (
                    <p className="text-red-500 text-sm">{errors.budget}</p>
                  )}
                </div>
              </div>

              {/* File Upload */}
              <div className="border-2 border-dashed pl-5 rounded-full flex justify-between items-center">
                {/* <label className="py-3 text-[#B6B6B6] line-clamp-1">
                  Upload Your Project Requirement
                </label> */}
                <label
                  className="py-3 text-[#B6B6B6] line-clamp-1 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  Upload Your Project Requirement
                </label>

                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileInput"
                />
                <label
                  htmlFor="fileInput"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full cursor-pointer text-[18px] font-medium"
                >
                  Choose
                </label>
                {errors.file && (
                  <p className="text-red-500 text-sm">{errors.file}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label>Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="p-2 border rounded-full w-full"
                  required
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">{errors.companyName}</p>
                )}
              </div>

              {/* Project Description */}
              <div>
                <label>Project Description</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Project Description"
                  className="p-2 border rounded-[17px] w-full"
                />
                {errors.projectDescription && (
                  <p className="text-red-500 text-sm">
                    {errors.projectDescription}
                  </p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  required
                />
                <label>I Accept the Terms & Conditions.</label>
                {errors.termsAccepted && (
                  <p className="text-red-500 text-sm">{errors.termsAccepted}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-full"
              >
                Submit
              </button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default OurServices;
