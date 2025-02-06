import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const ApplyForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    position: "",
    ctc: "",
    expectedCtc: "",
    noticePeriod: "",
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
    if (!formData.position.trim()) newErrors.position = "Position is required.";
    if (!formData.ctc.trim()) newErrors.ctc = "Current CTC is required.";
    if (!formData.expectedCtc.trim()) newErrors.expectedCtc = "Expected CTC is required.";
    if (!formData.noticePeriod.trim()) newErrors.noticePeriod = "Notice Period is required.";
    if (!formData.file) newErrors.file = "Resume upload is required.";
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
        mobile: "",
        position: "",
        ctc: "",
        expectedCtc: "",
        noticePeriod: "",
        file: null,
        termsAccepted: false,
      });
      closeModal();
      setErrors({});
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className=" bg-white p-6 rounded-lg relative">
        <button onClick={closeModal} className="absolute top-3 right-3 text-gray-600 hover:text-black">
          <AiOutlineClose size={24} />
        </button>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="w-full flex gap-5">
            <div className="w-[50%] lg:w-full">
              <label>Mobile</label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
                className="p-2 border rounded-full w-full"
                required
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>
            <div className="w-[50%] lg:w-full">
              <label>Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Position"
                className="p-2 border rounded-full w-full"
                required
              />
              {errors.position && (
                <p className="text-red-500 text-sm">{errors.position}</p>
              )}
            </div>
          </div>

          <div className="w-full flex gap-5">
            <div className="w-[50%] lg:w-full">
              <label>CTC</label>
              <input
                type="text"
                name="ctc"
                value={formData.ctc}
                onChange={handleChange}
                placeholder="CTC"
                className="p-2 border rounded-full w-full"
                required
              />
              {errors.ctc && (
                <p className="text-red-500 text-sm">{errors.ctc}</p>
              )}
            </div>

            <div className="w-[50%] lg:w-full">
              <label>Expected CTC</label>
              <input
                type="text"
                name="expectedCtc"
                value={formData.expectedCtc}
                onChange={handleChange}
                placeholder="Expected CTC"
                className="p-2 border rounded-full w-full"
                required
              />
              {errors.expectedCtc && (
                <p className="text-red-500 text-sm">{errors.expectedCtc}</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <label>Notice Period</label>
            <input
              type="text"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
              placeholder="Notice Period"
              className="p-2 border rounded-full w-full"
              required
            />
            {errors.noticePeriod && (
              <p className="text-red-500 text-sm">{errors.noticePeriod}</p>
            )}
          </div>

          <div className="border-2 border-dashed pl-5 rounded-full flex justify-between items-center">
            <label className="py-3 text-[#B6B6B6]">Upload Your Resume</label>
            <input type="file" name="file" onChange={handleFileChange} className="hidden" id="fileInput" />
            <label htmlFor="fileInput" className="bg-blue-600 text-white px-6 py-3 rounded-full cursor-pointer text-[18px] font-medium">
              Choose
            </label>
            {errors.file && <p className="text-red-500 text-sm">{errors.file}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyForm;
