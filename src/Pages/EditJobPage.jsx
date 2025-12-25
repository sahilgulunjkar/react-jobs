import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const EditJobPage = () => {
  const navigate = useNavigate();
  const job = useLoaderData(); // <-- loads job from the loader

  const [formData, setFormData] = useState({
    title: job.title,
    type: job.type,
    salary: job.salary,
    location: job.location,
    description: job.description,
    companyName: job.company.name,
    companyDescription: job.company.description,
    contactEmail: job.company.contactEmail,
    contactPhone: job.company.contactPhone
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedJob = {
      title: formData.title,
      type: formData.type,
      salary: formData.salary,
      location: formData.location,
      description: formData.description,
      company: {
        name: formData.companyName,
        description: formData.companyDescription,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
      },
    };

    await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedJob),
    });

    toast.success("Job updated successfully!");
    navigate("/jobs"); 
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Add New Job</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Job Info */}
        <div>
          <label className="block mb-1 font-medium">Job Title</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border rounded-lg p-4"
          >
            <option value="">Select title</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Senior React Developer">Senior React Developer</option>
          </select>
            
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Job Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Intern">Intern</option>

            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Salary</label>
            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              placeholder="eg: ₹12,00,000"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full border rounded-lg p-2"
          />
        </div>

        {/* Company Info */}
        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-4">Company Info</h2>

          <div className="space-y-4">
            <input
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

            <textarea
              name="companyDescription"
              placeholder="Company Description"
              value={formData.companyDescription}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-lg p-2"
            />

            <input
              name="contactEmail"
              placeholder="Contact Email"
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

            <input
              name="contactPhone"
              placeholder="Contact Phone"
              value={formData.contactPhone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Update 
          </button>

        </div>
      </form>
    </div>
  );
};

export default EditJobPage;
