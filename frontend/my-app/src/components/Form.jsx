import React, { useState } from "react";
import "../styles/form.css";
import bg from "../assets/form-bg.jpg";
import axios from "axios";
import Footer from "./Footer";

function Form() {
  const [formData, setFormData] = useState({
    teamName: "",
    problemStatement: "",
    leaderName: "",
    leaderWhatsapp: "",
    leaderEmail: "",
    members: [{ name: "", whatsapp: "", email: "" }],
    collegeName: "",
    collegeAddress: "",
    city: "",
    state: "",
    pincode: "",
    referralSource: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMemberChange = (index, e) => {
    const { name, value } = e.target;
    const newMembers = [...formData.members];
    newMembers[index][name] = value;
    setFormData({ ...formData, members: newMembers });
  };

  const addMember = () => {
    if (formData.members.length < 3) {
      setFormData({
        ...formData,
        members: [...formData.members, { name: "", whatsapp: "", email: "" }],
      });
    } else {
      alert(
        "Maximum 3 additional members allowed (team size = 4 including leader)."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://arjuna-2-0-official-website.onrender.com/api/register",
        formData
      );

      alert("Registration successful!");
      setFormData({
        teamName: "",
        problemStatement: "",
        leaderName: "",
        leaderWhatsapp: "",
        leaderEmail: "",
        members: [{ name: "", whatsapp: "", email: "" }],
        collegeName: "",
        collegeAddress: "",
        city: "",
        state: "",
        pincode: "",
        referralSource: "",
      });
    } catch (error) {
      alert("Error submitting form");
    }
  };

  const problemOptions = [
    "AI-BASED SMART FOOD WASTE MANAGEMENT",
    "SMART DRAINAGE AND FLOOD PREVENTION SYSTEM",
    "CARBON FOOTPRINT TRACKER FOR INDIVIDUALS",
    "SMART ENERGY RECOVERY SYSTEM"
  ];

  return (
    <>
      <section
        className="registration-section"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <form onSubmit={handleSubmit} className="form-content">
          <h2>Team Registration</h2>

          <input
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            placeholder="Team Name"
            required
          />

          <input
            name="leaderName"
            value={formData.leaderName}
            onChange={handleChange}
            placeholder="Leader Name"
            required
          />
          <input
            name="leaderWhatsapp"
            value={formData.leaderWhatsapp}
            onChange={handleChange}
            placeholder="Leader WhatsApp Number"
            required
          />
          <input
            name="leaderEmail"
            value={formData.leaderEmail}
            onChange={handleChange}
            placeholder="Leader Email"
            required
          />

          <h4>Team Members</h4>
          {formData.members.map((member, index) => (
            <div key={index}>
              <input
                name="name"
                value={member.name}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Member Name"
                required
              />
              <input
                name="whatsapp"
                value={member.whatsapp}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Member WhatsApp"
                required
              />
              <input
                name="email"
                value={member.email}
                onChange={(e) => handleMemberChange(index, e)}
                placeholder="Member Email"
                required
              />
            </div>
          ))}
          <button type="button" onClick={addMember}>
            Add Member
          </button>

          <input
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            placeholder="College Name"
            required
          />
          <input
            name="collegeAddress"
            value={formData.collegeAddress}
            onChange={handleChange}
            placeholder="College Address"
            required
          />
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
          />
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
            required
          />
          <input
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            required
          />
          <input
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            placeholder="From where did you learn about Arjuna"
            required
          />

          {/* ================= Dropdown for Problem Statement ================= */}
          <div className="dropdown">
            <div
              className="dropdown-header"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {formData.problemStatement || "Choice of Problem Statement"}
              <span className={`arrow ${dropdownOpen ? "open" : ""}`}></span>
            </div>

            <div className={`dropdown-list ${dropdownOpen ? "show" : ""}`}>
              {problemOptions.map((option, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    setFormData({ ...formData, problemStatement: option });
                    setDropdownOpen(false);
                  }}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
          {/* =================================================================== */}

          <button type="submit">Submit</button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Form;
