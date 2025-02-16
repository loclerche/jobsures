"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JobApplication() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    description: "",
    location: "",
    jobType: "",
    termsAccepted: false
  });
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.termsAccepted) {
      alert("Vous devez accepter les conditions d'utilisation pour postuler.");
      return;
    }
    
    await fetch("/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    
    setSubmitted(true);
    setTimeout(() => router.push("/"), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {submitted ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-green-600"> Votre Candidature a été enregistrée avec succès !</h2>
          <p> Vous serez redirigé vers la page d'accueil...</p>
        </div>
      ) : (
             
        <form onSubmit={handleSubmit} className="bg-white p-8  font-bold rounded-lg shadow-md w-full max-w-lg space-y-5 space-x-5 grid grid-cols-1 md:grid-cols-2">
          
          <h2 className="text-2xl font-bold tex-blue-800 mb-4 text-center text-[#0097b2]">Postuler à une offre</h2>
          
          <div>
            <label className="block mb-2 text-red-500">Nom complet</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
          </div>

          <div>
            <label className="block mb-2 text-red-500">Téléphone (+241)</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required placeholder="+241..." />
          </div>

          <div>
            <label className="block mb-2 text-red-500">E-mail</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
          </div>

          <div>
            <label className="block mb-2 text-red-500">Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required></textarea>
            
            <div>
              <label className="block mb-2 text-red-500">Localisation</label>
              <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 mb-4 border rounded" required />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-red-500">Métier (optionnel)</label>
            <select name="jobType " value={formData.jobType} onChange={handleChange} className="w-full p-2 mb-4 border rounded">
              <option value="text-red-500" >Sélectionner un métier</option>
              <option value="nounou">Nounou</option>
              <option value="menagere">Ménagère</option>
              <option value="vigil">Vigil</option>
              <option value="macon">Maçon</option>
              <option value="electricien">Électricien</option>
              <option value="plombier">Plombier</option>
              <option value="frigoriste">Frigoriste</option>
            </select>
          </div>

          <div>
            <label className="flex items-center pl-6">
              <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2" required />
              J'accepte les 
              <a href="/terms" className="text-[#0097b2] underline">conditions d'utilisation</a>
            </label>
          </div>

          <div>
            <button type="submit" className="w-full bg-[#0097b2] text-white py-2 px-4 rounded hover:bg-red-500">Envoyer</button>
          </div>
        </form>
      )}
    </div>
  );
}
