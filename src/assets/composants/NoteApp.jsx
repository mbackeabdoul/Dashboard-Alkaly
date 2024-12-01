// import React, { useState, useEffect } from 'react';
// import { PencilIcon, TrashIcon } from 'lucide-react';

// const NotesApp = () => {
//   const [notes, setNotes] = useState([]);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedDate, setSelectedDate] = useState('');
//   const [editingId, setEditingId] = useState(null);

//   // Simuler la récupération des données depuis Firebase
//   useEffect(() => {
//     const initialNotes = [
//       { id: 1, title: 'Birthday', content: 'Vishnu 💛', date: '2023-09-05', category: 'Birthday' },
//       { id: 2, title: 'marriage', content: 'Mom❤️Dad', date: '2023-05-05', category: 'Family' },
//       { id: 3, title: 'hello', content: 'birthday shreya🎈', date: '2023-11-05', category: 'Birthday' },
//       { id: 4, title: 'Teja', content: 'Birthday', date: '2023-01-19', category: 'Birthday' },
//       { id: 5, title: 'Renuka', content: 'Birthday', date: '2023-10-05', category: 'Birthday' },
//       { id: 6, title: 'Jyothika', content: 'Birthday', date: '2023-07-25', category: 'Birthday' },
//       { id: 7, title: 'Vivek', content: 'Birthday', date: '2023-10-30', category: 'Birthday' },
//       { id: 8, title: 'Chethan', content: 'Birthday', date: '2023-05-20', category: 'Birthday' },
//     ];
//     setNotes(initialNotes);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !content || !selectedDate) return;

//     if (editingId) {
//       setNotes(notes.map(note => 
//         note.id === editingId 
//           ? { ...note, title, content, date: selectedDate }
//           : note
//       ));
//       setEditingId(null);
//     } else {
//       const newNote = {
//         id: Date.now(),
//         title,
//         content,
//         date: selectedDate,
//         category: 'Birthday', // Default category
//       };
//       setNotes([...notes, newNote]);
//     }

//     setTitle('');
//     setContent('');
//     setSelectedDate('');
//   };

//   const handleEdit = (note) => {
//     setEditingId(note.id);
//     setTitle(note.title);
//     setContent(note.content);
//     setSelectedDate(note.date);
//   };

//   const handleDelete = (id) => {
//     setNotes(notes.filter(note => note.id !== id));
//   };

//   const filteredNotes = notes.filter(note =>
//     note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     note.content.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-800 text-white p-8">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold mb-8 text-center">Notes</h1>
        
//         {/* Form for adding/editing notes */}
//         <form onSubmit={handleSubmit} className="mb-8 flex gap-2 justify-center">
//           <input
//             type="text"
//             placeholder="Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="bg-white text-black px-4 py-2 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Note content"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="bg-white text-black px-4 py-2 rounded"
//           />
//           <input
//             type="date"
//             value={selectedDate}
//             onChange={(e) => setSelectedDate(e.target.value)}
//             className="bg-white text-black px-4 py-2 rounded"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Add
//           </button>
//         </form>

//         {/* Search bar */}
//         <div className="mb-8">
//           <input
//             type="text"
//             placeholder="Search by title..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full bg-white text-black px-4 py-2 rounded"
//           />
//         </div>

//         {/* Notes grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {filteredNotes.map((note) => (
//             <div
//               key={note.id}
//               className="bg-gray-700 p-4 rounded-lg"
//             >
//               <h3 className="text-blue-400 font-bold mb-2">{note.title}</h3>
//               <p className="text-gray-300 mb-2">{note.content}</p>
//               <p className="text-gray-400 text-sm">{note.date}</p>
//               <div className="mt-4 flex justify-between">
//                 <button
//                   onClick={() => handleEdit(note)}
//                   className="p-2 hover:bg-gray-600 rounded"
//                 >
//                   <PencilIcon className="h-4 w-4" />
//                 </button>
//                 <button
//                   onClick={() => handleDelete(note.id)}
//                   className="p-2 hover:bg-gray-600 rounded"
//                 >
//                   <TrashIcon className="h-4 w-4" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Note count */}
//         <div className="mt-8 text-center text-gray-400">
//           Total notes: {notes.length}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotesApp;

import React from 'react';
import { PencilIcon, TrashIcon } from 'lucide-react';

const NotesApp = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Notes</h1>
        
        {/* Form for adding notes */}
        <form className="mb-8 flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Title"
            className="bg-white text-black px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Note content"
            className="bg-white text-black px-4 py-2 rounded"
          />
          <input
            type="date"
            className="bg-white text-black px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </form>

        {/* Search bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by title..."
            className="w-full bg-white text-black px-4 py-2 rounded"
          />
        </div>

        {/* Notes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Note card example */}
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-blue-400 font-bold mb-2">Birthday</h3>
            <p className="text-gray-300 mb-2">Vishnu 💛</p>
            <p className="text-gray-400 text-sm">2023-09-05</p>
            <div className="mt-4 flex justify-between">
              <button className="p-2 hover:bg-gray-600 rounded">
                <PencilIcon className="h-4 w-4" />
              </button>
              <button className="p-2 hover:bg-gray-600 rounded">
                <TrashIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Note count */}
        <div className="mt-8 text-center text-gray-400">
          Total notes: 1
        </div>
      </div>
    </div>
  );
};

export default NotesApp;