import { useParams, useLoaderData, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';


const singlePageLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
} 

const SinglePage = () => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = async (jobId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this listing?");
    if (!confirmDelete) return;

    await fetch(`/api/jobs/${jobId}`, { method: "DELETE" });
    toast.success('Job deleted successfully');

    navigate('/jobs');
  };


   return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {job.title}
        </h1>
        <p className="text-gray-600">
          {job.company.name} • {job.location}
        </p>
      </div>

      {/* Job Meta */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-gray-500">Job Type</p>
          <p className="font-medium">{job.type}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <p className="text-sm text-gray-500">Salary</p>
          <p className="font-medium">{job.salary}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <p className="text-sm text-gray-500">Location</p>
          <p className="font-medium">{job.location}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">
          {job.description}
        </p>
      </div>

      {/* Company Info */}
      <div className="border-t pt-8">
        <h2 className="text-xl font-semibold mb-3">
          About {job.company.name}
        </h2>
        <p className="text-gray-700 mb-4">
          {job.company.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          
          <button
          className="px-5 py-2 rounded-lg bg-blue-600 text-white text-center hover:bg-blue-700 transition"
          onClick={() => navigate(`/edit-job/${job.id}`)}
          >
          Edit
          </button>
          
          <button
          className="px-5 py-2 rounded-lg border text-center hover:bg-gray-100 transition"
          onClick={ () => onDeleteClick(job.id) }
          >
          Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export { SinglePage as default, singlePageLoader };