// src/assets/components/LocaleStorage.jsx
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

  // Récupérer les utilisateurs depuis Firestore
  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "utilisateurs"));
      const usersList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUtilisateurs(usersList);
    };
    getUsers();
  }, []);

  // Ajouter ou mettre à jour un utilisateur
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formulaire.id === null) {
      await addDoc(collection(db, "utilisateurs"), formulaire);
    } else {
      const userDoc = doc(db, "utilisateurs", formulaire.id);
      await updateDoc(userDoc, formulaire);
    }

    // Réinitialiser le formulaire et recharger la liste des utilisateurs
    setFormulaire({ id: null, prenom: "", nom: "", email: "", telephone: "" });
    const querySnapshot = await getDocs(collection(db, "utilisateurs"));
    const usersList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUtilisateurs(usersList);
  };

  // Modifier un utilisateur
  const handleEdit = (id) => {
    const utilisateur = utilisateurs.find((user) => user.id === id);
    setFormulaire(utilisateur);
  };

  // Supprimer un utilisateur
  const handleDelete = async (id) => {
    const userDoc = doc(db, "utilisateurs", id);
    await deleteDoc(userDoc);

    // Mettre à jour la liste après suppression
    const querySnapshot = await getDocs(collection(db, "utilisateurs"));
    const usersList = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUtilisateurs(usersList);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulaire({ ...formulaire, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Gestion des Utilisateurs</h1>

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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          >
            {formulaire.id === null ? "Ajouter" : "Modifier"}
          </button>
        </div>
      </form>

      <div className="flex justify-center w-full mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {utilisateurs.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col justify-between"
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
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocaleStorage;
