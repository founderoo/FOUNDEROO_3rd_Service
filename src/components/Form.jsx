
import { useState } from "react";
import Select from 'react-select';
import Confetti from 'react-confetti';
import { FaUser, FaInfoCircle, FaUserEdit, FaCheckCircle, FaCheck } from 'react-icons/fa'; // Importing required icons

const sidebarSteps = [
  { label: "Basic information", icon: FaUser },
  { label: "Important information", icon: FaInfoCircle },
  { label: "About you", icon: FaUserEdit },
  { label: "Completed", icon: FaCheckCircle },
];

const mainSteps = [
  { label: "Basic information", icon: FaUser },
  { label: "Important information", icon: FaInfoCircle },
  { label: "About you", icon: FaUserEdit },
  { label: "Completed", icon: FaCheckCircle },
];

const skillOptions = [
  { value: "JavaScript", label: "JavaScript" },
  { value: "Java", label: "Java" },
  { value: "C++", label: "C++" },
  { value: "React", label: "React" },
  { value: "Node.js", label: "Node.js" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Design", label: "Design" },
  { value: "Product Management", label: "Product Management" },
  { value: "Operations", label: "Operations" },
  { value: "Python", label: "Python" },
  { value: "SQL", label: "SQL" },
  { value: "Go", label: "Go" },
  { value: "Business Analysis", label: "Business Analysis" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "Leadership", label: "Leadership" },
];

const getStepStatus = (idx, currentStep) => {
  if (idx === currentStep) return "active";
  if (idx < currentStep) return "completed";
  return "inactive";
};

const getSidebarStatus = (idx, currentSidebarStep) => {
  if (idx < currentSidebarStep) return "completed";
  if (idx === currentSidebarStep) return "active";
  return "inactive";
};

function StepIcon({ status }) {
  if (status === "completed") {
    return (
      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-700 border border-green-500">
        <FaCheck className="w-3 h-3" />
      </span>
    );
  }
  if (status === "active") {
    return (
      <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-purple-600 bg-white text-purple-600" />
    );
  }
  return (
    <span className="w-5 h-5 flex items-center justify-center rounded-full border-2 border-gray-200 bg-gray-100 text-gray-400" />
  );
}

function Stepper({ currentStep }) {
  return (
    <div className="flex items-center w-full mb-8 justify-center">
      {mainSteps.map((step, idx) => {
        const status = getStepStatus(idx, currentStep);
        return (
          <div className="flex items-center" key={step.label}>
            <div className="flex flex-col items-center min-w-[150px] ml-16"> {/* Changed to ml-16 */}
              <span
                className={`w-5 h-5 flex items-center justify-center ${
                  status === "completed" ? "bg-green-100 border-green-500" : status === "active" ? "border-purple-600" : "border-gray-200 bg-gray-100"
                } rounded-full mb-2`}
              >
                {status === "completed" && <FaCheck className="w-3 h-3" />}
              </span>
              <span
                className={`mt-0 text-base font-semibold ${
                  status === "active" ? "text-purple-600" : status === "completed" ? "text-green-600" : "text-gray-400"
                }`}
              >
                <step.icon className="w-6 h-6 mb-1" /> {/* Icon above label */}
                {step.label}
              </span>
            </div>
            {idx !== mainSteps.length - 1 && (
              <div
                className={`mx-2 flex-1 h-1 ${
                  status === "completed" ? "bg-green-400" : status === "active" ? "bg-purple-600" : "bg-gray-200"
                }`}
                style={{ minWidth: 48 }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Sidebar({ currentSidebarStep }) {
  return (
    <div className="w-80 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="bg-purple-900 h-16 flex items-center px-6">
        {/* Empty div for dark purple header */}
      </div>
      <div className="px-6 py-4">
        <input className="w-full p-2 rounded bg-gray-100 border border-gray-200 text-sm mb-4" placeholder="Search" />
        <ul className="space-y-3">
          {sidebarSteps.map((step, idx) => {
            const status = getSidebarStatus(idx, currentSidebarStep);
            return (
              <li
                key={step.label}
                className={`flex items-center py-2 px-3 rounded-md ${
                  status === "active" ? "bg-purple-50 text-purple-700 font-bold" : "text-gray-700"
                }`}
              >
                <span className="flex-1 flex items-center">
                  <step.icon className="mr-2 w-4 h-4" />
                  {step.label}
                </span>
                <div className="flex items-center">
                  {status === "completed" && (
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 text-green-700 border border-green-500 mr-2">
                      <FaCheck className="w-3 h-3" />
                    </span>
                  )}
                  <span
                    className={`w-16 h-1 ${
                      status === "completed" ? "bg-green-400" : status === "active" ? "bg-purple-600" : "bg-gray-200"
                    } rounded-full`}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-auto mb-6 px-6 space-y-3"></div>
    </div>
  );
}

export default function Form() {
  const [step, setStep] = useState(0); // Set to "Basic information" step
  const sidebarStep = step; // Align sidebar step with the current step
  const [showComplete, setShowComplete] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    location: "",
    email: "",
    birthDate: "",
    birthDateMM: "",
    birthDateYY: "",
    expertise: "",
    skills: [],
    workExp: "",
    availability: "",
    startupStage: "",
    expSalary: "",
    aboutYou: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  const handleSkillsChange = (selectedOptions) => {
    setFormData((d) => ({
      ...d,
      skills: selectedOptions || [],
    }));
  };

  const handleNext = () => {
    if (step === 2) {
      setShowComplete(true);
      setStep(3);
    } else {
      setStep((s) => Math.min(s + 1, 3));
    }
  };
  const handlePrev = () => setStep((s) => Math.max(s - 1, 0));
  const handleCloseModal = () => setShowComplete(false);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar currentSidebarStep={sidebarStep} />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center px-12 pt-10 pb-3">
          <h1 className="text-2xl font-bold">Personal details</h1>
          {/* <button className="border border-purple-400 text-purple-500 px-4 py-2 rounded-lg transition hover:bg-purple-50">
            Save as draft
          </button> */}
        </div>
        <div className="px-12">
          <Stepper currentStep={step} />

          {/* Basic information STEP */}
          {step === 0 && (
            <div className="bg-white border border-purple-200 rounded-lg shadow-sm mb-4 p-20 w-full">
              <h2 className="text-lg font-bold mb-12 text-purple-700">Basic information</h2>

              {/* 1st row: Name, Phone, Location */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Location"
                    required
                  />
                </div>
              </div>

              {/* 2nd row: Email, DOB */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Email <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Email"
                    required
                  />
                  <div className="flex items-center bg-purple-50 border border-purple-200 rounded px-2 py-1 mt-1">
                    <svg className="w-4 h-4 text-purple-400 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 20 20">
                      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" fill="#EDE9FE" />
                      <text x="8.5" y="14" fontSize="10" fill="#6B21A8">i</text>
                    </svg>
                    <span className="text-xs text-purple-600 ml-1">
                      Your email will be used for the app’s login.
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Date of Birth <span className="text-orange-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-1/3 p-2 border border-gray-300 rounded text-center"
                      placeholder="DD"
                      maxLength={2}
                      required
                    />
                    <input
                      type="text"
                      name="birthDateMM"
                      value={formData.birthDateMM}
                      onChange={handleChange}
                      className="w-1/3 p-2 border border-gray-300 rounded text-center"
                      placeholder="MM"
                      maxLength={2}
                    />
                    <input
                      type="text"
                      name="birthDateYY"
                      value={formData.birthDateYY}
                      onChange={handleChange}
                      className="w-1/3 p-2 border border-gray-300 rounded text-center"
                      placeholder="YY"
                      maxLength={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Important information STEP */}
          {step === 1 && (
            <div className="bg-white border border-purple-200 rounded-lg shadow-sm mb-4 p-20 w-full">
              <h2 className="text-lg font-bold mb-4">Important information</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    1) Area of Expertise <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Tech, Business, Marketing, etc."
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    2) Skills <span className="text-orange-500">*</span>
                  </label>
                  <Select
                    isMulti
                    name="skills"
                    value={formData.skills}
                    onChange={handleSkillsChange}
                    options={skillOptions}
                    placeholder="Select or type to search skills"
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                  <p className="text-xs text-gray-500 mt-1">Start typing or click to choose one or more skills. Selected skills will appear as tags.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    3) Work experience <span className="text-orange-500">*</span> (Previous Startup)
                  </label>
                  <div className="flex gap-6 mt-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="workExp"
                        value="yes"
                        checked={formData.workExp === "yes"}
                        onChange={handleChange}
                        className="form-radio"
                        required
                      />
                      <span className="ml-1">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="workExp"
                        value="no"
                        checked={formData.workExp === "no"}
                        onChange={handleChange}
                        className="form-radio"
                      />
                      <span className="ml-1">No</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    4) Availability <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none"
                      required
                    >
                      <option value="">Select availability</option>
                      <option value="full-time">Full time</option>
                      <option value="part-time">Part time</option>
                    </select>
                    <svg className="w-4 h-4 absolute right-3 top-1/2 pointer-events-none transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    5) Startup stage <span className="text-orange-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="startupStage"
                      value={formData.startupStage}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none"
                      required
                    >
                      <option value="">Select stage</option>
                      <option value="idea">Idea</option>
                      <option value="mvp">MVP</option>
                      <option value="launched">Launched</option>
                      <option value="revenue">Revenue</option>
                    </select>
                    <svg className="w-4 h-4 absolute right-3 top-1/2 pointer-events-none transform -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    6) Expected Salary <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="expSalary"
                    value={formData.expSalary}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter expected salary"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* About you STEP */}
          {/* About you STEP */}
{step === 2 && (
  <div className="bg-white border border-purple-200 rounded-lg shadow-sm mb-4 p-6 w-full max-w-4xl mx-auto">
    <h2 className="text-lg font-bold mb-4 text-purple-800">About you</h2>
    <label className="block text-lg font-semibold mb-2">
      Tell us about yourself, your achievements, contributions, or anything that best showcases you:
    </label>
    <textarea
      name="aboutYou"
      value={formData.aboutYou}
      onChange={handleChange}
      rows={10}
      placeholder="Describe your achievements, your journey, contributions, notable experiences etc..."
      className="w-full p-4 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
    />
  </div>
)}


          {/* "Completed" step and Modal */}
          {(showComplete || step === 3) && (
            <div>
              {/* Overlay Modal */}
              {showComplete && (
                <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
                  <div className="relative bg-white rounded-lg p-10 max-w-md w-full shadow-xl flex flex-col items-center">
                    <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} />
                    <svg className="w-16 h-16 text-green-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 12l2 2l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <h3 className="text-xl font-bold text-green-600 mb-2">Congratulations!</h3>
                    <p className="mb-3 text-center text-gray-700">Your information has been submitted successfully.</p>
                    <button
                      className="mt-2 px-6 py-2 bg-purple-500 text-white rounded-lg text-lg shadow hover:bg-purple-600"
                      onClick={handleCloseModal}
                    >Okay</button>
                  </div>
                </div>
              )}
              {/* Completed Section */}
              <div className="py-24 flex flex-col items-center justify-center">
                <svg className="w-16 h-16 text-green-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 12l2 2l4-4" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <h2 className="text-2xl font-bold text-green-500 mb-3">You have completed the form!</h2>
                <p className="text-gray-700">Thank you for providing your details. We appreciate your time.</p>
              </div>
            </div>
          )}

          <div className="flex justify-end gap-2 pb-8">
            {step > 0 && step <= 2 && (
              <button
                type="button"
                className="border px-5 py-2 rounded bg-white hover:bg-gray-100 text-purple-500"
                onClick={handlePrev}
              >
                Previous
              </button>
            )}
            {step < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 py-2 rounded bg-purple-500 hover:bg-purple-600 text-white"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
