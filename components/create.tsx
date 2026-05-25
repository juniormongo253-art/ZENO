"use client";


export default function Create() {
 
  return (
    <form className="ml-12 mt-6 leading-16">
        <span>Créer un nouveau projet</span>
         <input
          type="text"
          name="projectName"
          placeholder="Nom du projet"        
          className="w-2xl rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-gray-300"
          required
        />
         <input
          type="text"
          name="clientName"
          placeholder="Nom du client"
         className="w-2xl rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-gray-300"
          required
        />
        <input
          type="text"
          placeholder="Date de création"
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) => !e.target.value && (e.target.type = "text")}
          name="createdAt"
          className="w-2xl rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-gray-200"
          required
        />
        <select
          name="status"
           className="w-2xl rounded-lg border text-gray-500 border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:border-gray-300 appearance-none"
          required
        >
          <option value="">Statut du projet</option>
          <option value="en_attente">En attente</option>
          <option value="en_cours">En cours</option>
          <option value="termine">Terminé</option>
        </select>   
    
    </form>
  );
}
