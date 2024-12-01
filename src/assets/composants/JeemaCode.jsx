import React, { useState } from "react";

const LocaleStorage = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [formulaire, setFormulaire] = useState({
    id: null,
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
  });
  const [loading, setLoading] = useState(false);

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let updatedUsers = [...utilisateurs];

    if (formulaire.id === null) {
      // Création
      updatedUsers.push({ ...formulaire, id: Date.now() });
    } else {
      // Modification
      updatedUsers = updatedUsers.map((user) =>
        user.id === formulaire.id ? formulaire : user
      );
    }

    // Mettre à jour l'état des utilisateurs
    setUtilisateurs(updatedUsers);

    // Réinitialiser le formulaire
    setFormulaire({ id: null, prenom: "", nom: "", email: "", telephone: "" });
    setLoading(false);
  };

  // Gérer la modification
  const handleEdit = (id) => {
    const utilisateur = utilisateurs.find((user) => user.id === id);
    if (utilisateur) {
      setFormulaire(utilisateur);
    }
  };

  // Gérer la suppression
  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      setLoading(true);
      
      // Supprimer l'utilisateur en filtrant par ID
      const updatedUsers = utilisateurs.filter((user) => user.id !== id);
      
      // Mettre à jour l'état avec la liste filtrée
      setUtilisateurs(updatedUsers);
      
      setLoading(false);
    }
  };

  // Gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire({ ...formulaire, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Gestion des Utilisateurs</h1>

      {/* Formulaire */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl"
      >
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formulaire.prenom}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Prénom"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2">Nom</label>
            <input
              type="text"
              name="nom"
              value={formulaire.nom}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Nom"
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formulaire.email}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 font-bold mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              name="telephone"
              value={formulaire.telephone}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Téléphone"
              required
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700'
            } text-white font-bold py-2 px-6 rounded`}
          >
            {loading ? 'Chargement...' : formulaire.id === null ? "Ajouter" : "Modifier"}
          </button>
        </div>
      </form>

      {/* Liste des utilisateurs */}
      <div className="flex justify-center w-full mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {loading ? (
            <div className="col-span-full text-center">Chargement...</div>
          ) : utilisateurs.length === 0 ? (
            <div className="col-span-full text-center">Aucun utilisateur trouvé</div>
          ) : (
            utilisateurs.map((user) => (
              <div
                key={user.id}
                className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-200"
              >
                <div>
                  <h5 className="font-bold">Prénom : {user.prenom}</h5>
                  <h5 className="font-bold">Nom : {user.nom}</h5>
                  <p className="text-gray-600">Email : {user.email}</p>
                  <p className="text-gray-600">Téléphone : {user.telephone}</p>
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleEdit(user.id)}
                    disabled={loading}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded disabled:bg-gray-400"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    disabled={loading}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded disabled:bg-gray-400"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default LocaleStorage;
