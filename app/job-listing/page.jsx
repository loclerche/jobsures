"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function JobListings() {
  const [jobList, setJobList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Charger les offres stockées
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobList(jobs);
  }, []);

  const handleApply = (job) => {
    router.push(`/candidatform?title=${encodeURIComponent(job.title)}`);
  };

  return (
    <div className="min-h-screen bg- p-6 flex flex-col items-center pt-16">
      <h1 className="text-3xl font-bold text-[#0097b2] mb-4">Postuler à des Offres d'Emplois  </h1>
      <ul className="mt-4 w-full max-w-lg">
        {jobList.length > 0 ? (
          jobList.map((offer, index) => (
            <li key={index} className="bg-white  p-4 rounded-lg shadow-md mb-2">
              <h3 className="text-xl text-[#0097b2] font-bold">{offer.title}</h3>
              <p><strong className="text-red-500">Durée:</strong> {offer.duration}</p>
              <p><strong>Lieu:</strong> {offer.location}</p>
              <p><strong className="text-red-500">Salaire:</strong> {offer.salary} FCFA</p>
              <p>{offer.description}</p>
              <button  
                className="mt-2 bg-[#0097b2] text-white py-1 px-3 rounded hover:bg-yellow-700"
                onClick={() => handleApply(offer)}
              >
                Postuler
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-600 font-bold text-align-center text-yellow-700"> Aucune offre disponible pour l'instant.</p>
        )}
      </ul>
    </div>
  );
}
