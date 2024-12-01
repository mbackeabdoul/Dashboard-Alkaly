import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Configuration de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3qJQ0yvFs2eyUVcsraAgjX3Y0YJPGONM",
  authDomain: "samatodolist-react.firebaseapp.com",
  projectId: "samatodolist-react",
  storageBucket: "samatodolist-react.firebasestorage.app",
  messagingSenderId: "627228121820",
  appId: "1:627228121820:web:bdcaf8dfc44241a3603219",
  measurementId: "G-XJ02ZJQ8XY"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore
const db = getFirestore(app);

const LocaleStorage = () => {
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [formulaire, setFormulaire] = useState({
    id: null,
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fonction pour afficher les messages de succès
  const showSuccess = (message) => {
    setSuccess(message);
    setTimeout(() => setSuccess(null), 3000);
  };

  // Fonction pour afficher les messages d'erreur
  const showError = (message) => {
    setError(message);
    setTimeout(() => setError(null), 3000);
  };

  // Charger les utilisateurs
  const loadUsers = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "utilisateurs"));
      const usersList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUtilisateurs(usersList);
    } catch (error) {
      console.error("Erreur lors du chargement des utilisateurs:", error);
      showError("Erreur lors du chargement des utilisateurs");
    } finally {
      setLoading(false);
    }
  };

  // Charger les utilisateurs au montage du composant
  useEffect(() => {
    loadUsers();
  }, []);

  // Valider le formulaire
  const validateForm = (data) => {
    if (!data.prenom || !data.nom || !data.email || !data.telephone) {
      throw new Error("Tous les champs sont obligatoires");
    }
    if (!data.email.includes('@')) {
      throw new Error("Email invalide");
    }
    if (data.telephone.length < 10) {
      throw new Error("Numéro de téléphone invalide");
    }
  };

  // Gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Valider le formulaire
      validateForm(formulaire);

      if (formulaire.id === null) {
        // Création
        const { id, ...dataToSend } = formulaire;
        await addDoc(collection(db, "utilisateurs"), dataToSend);
        showSuccess("Utilisateur ajouté avec succès");
      } else {
        // Modification
        const { id, ...dataToUpdate } = formulaire;
        const userDoc = doc(db, "utilisateurs", id);
        await updateDoc(userDoc, dataToUpdate);
        showSuccess("Utilisateur modifié avec succès");
      }

      // Réinitialiser le formulaire
      setFormulaire({ id: null, prenom: "", nom: "", email: "", telephone: "" });
      // Recharger la liste
      await loadUsers();
    } catch (error) {
      console.error("Erreur lors de la sauvegarde:", error);
      showError(error.message || "Erreur lors de la sauvegarde");
    } finally {
      setLoading(false);
    }
  };

  // Gérer la modification
  const handleEdit = (id) => {
    const utilisateur = utilisateurs.find((user) => user.id === id);
    if (utilisateur) {
      setFormulaire(utilisateur);
    } else {
      showError("Utilisateur non trouvé");
    }
  };

  // Gérer la suppression
  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?")) {
      setLoading(true);
      try {
        const userDoc = doc(db, "utilisateurs", id);
        await deleteDoc(userDoc);
        showSuccess("Utilisateur supprimé avec succès");
        await loadUsers();
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
        showError("Erreur lors de la suppression");
      } finally {
        setLoading(false);
      }
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

      {/* Messages d'erreur et de succès */}
      {error && (
        <div className="w-full max-w-2xl mb-4 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
          {error}
        </div>
      )}
      {success && (
        <div className="w-full max-w-2xl mb-4 p-4 rounded-lg bg-green-100 border border-green-400 text-green-700">
          {success}
        </div>
      )}

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