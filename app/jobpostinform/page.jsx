"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JobPostingForm() {
  const [job, setJob] = useState({
    title: "",
    duration: "",
    description: "",
    location: "",
    salary: "",
    fullName: "",
    phone: "",
    email: ""
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

     // Envoyer les données au backend
     await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job)
      });

    // Stocker les données temporairement dans localStorage
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.push({
      title: job.title,
      duration: job.duration,
      description: job.description,
      location: job.location,
      salary: job.salary
    });
    localStorage.setItem("jobs", JSON.stringify(jobs));

    // Réinitialiser le formulaire
    setJob({ title: "", duration: "", description: "", location: "", salary: "", fullName: "", phone: "", email: "" });

    // Rediriger vers la page des offres
    router.push("/job-listings/page");
  };

  return (
    <div className="min-h-screen bg-blue-100 p-6 flex flex-col items-center pt-16">
      <h1 className="text-3xl font-bold text-[#0097b2] mb-4">Publier une Offre d'Emploi</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg text-red-500 shadow-md w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2">Titre de l'offre</label>
          <input type="text" name="title" value={job.title} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        </div>

        <div>
          <label className="block mb-2">Durée du contrat</label>
          <input type="text" name="duration" value={job.duration} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        </div>

        <div>
          <label className="block mb-2">Description</label>
          <textarea name="description" value={job.description} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required></textarea>
        </div>

        <div>
          <label className="block mb-2">Localisation</label>
          <input type="text" name="location" value={job.location} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        </div>

        <div>
          <label className="block mb-2">Salaire proposé (FCFA)</label>
          <input type="number" name="salary" value={job.salary} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        </div>

         {/* Champs non affichés publiquement */}
         <div>
          <label className="block mb-2">Nom complet</label>
          <input type="text" name="fullName" value={job.fullName} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        </div>

        <div>
          <label className="block mb-2">Téléphone</label>
          <input type="tel" name="phone" value={job.phone} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        </div>

        <div>
          <label className="block mb-2">E-mail</label>
          <input type="email" name="email" value={job.email} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
        </div>

        <button type="submit" className="bg-[#0097b2] text-white py-2 px-4 rounded w-full hover:bg-red-500">Publier</button>
      </form>
    </div>
  );
}
