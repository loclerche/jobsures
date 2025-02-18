"use client"

const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [success, setSuccess] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError(null);
  setSuccess(false);

  try {
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });

    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push({
      title: job.title,
      duration: job.duration,
      description: job.description,
      location: job.location,
      salary: job.salary,
    });
    localStorage.setItem("jobs", JSON.stringify(jobs));

    setJob({ title: "", duration: "", description: "", location: "", salary: "", fullName: "", phone: "", email: "" });
    setSuccess(true);
    router.push("/job-listings/page");
  } catch (err) {
    setError("Une erreur est survenue lors de la publication de l'offre.");
  } finally {
    setIsLoading(false);
  }
};

return (
  <div className="min-h-screen bg-blue-100 p-6 flex flex-col items-center pt-16">
    <h1 className="text-3xl font-bold text-[#0097b2] mb-4">Publier une Offre d'Emploi</h1>
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg text-red-500 shadow-md w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Champs de formulaire */}
      
      <button type="submit" className="bg-[#0097b2] text-white py-2 px-4 rounded w-full hover:bg-red-500">
        {isLoading ? "Envoi en cours..." : "Publier"}
      </button>
    </form>

    {error && <div className="text-red-500 mt-4">{error}</div>}
    {success && <div className="text-green-500 mt-4">Offre publiée avec succès !</div>}
  </div>
);
