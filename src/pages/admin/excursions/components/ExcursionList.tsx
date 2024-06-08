// src/pages/admin/excursions/components/ExcursionList.tsx
"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Excursion {
  id: number;
  name: string;
  description: string;
  price: number;
  date: string;
  numberOfTravelers: number;
  distance: number;
  duration: number;
  availability: string[];
  departureTime: string;
}

const ExcursionList = ({ showMessage }: { showMessage: (msg: string) => void }) => {
  const [excursions, setExcursions] = useState<Excursion[]>([]);
  const [editingExcursion, setEditingExcursion] = useState<Excursion | null>(null);

  useEffect(() => {
    axios.get('/api/excursions')
      .then(response => setExcursions(response.data))
      .catch(error => console.error('Error fetching excursions:', error));
  }, []);

  const deleteExcursion = async (id: number) => {
    try {
      await axios.delete(`/api/excursions/${id}`);
      setExcursions(excursions.filter(excursion => excursion.id !== id));
      showMessage('Excursion deleted successfully');
    } catch (error) {
      console.error('Error deleting excursion:', error);
      showMessage('Error deleting excursion');
    }
  };

  const updateExcursion = async (excursion: Excursion) => {
    try {
      const response = await axios.put(`/api/excursions/${excursion.id}`, excursion);
      setExcursions(excursions.map(exc => (exc.id === excursion.id ? response.data : exc)));
      setEditingExcursion(null);
      showMessage('Excursion updated successfully');
    } catch (error) {
      console.error('Error updating excursion:', error);
      showMessage('Error updating excursion');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Excursions</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Name</th>
            <th className="py-2">Description</th>
            <th className="py-2">Date</th>
            <th className="py-2">Price</th>
            <th className="py-2">Travelers</th>
            <th className="py-2">Distance</th>
            <th className="py-2">Duration</th>
            <th className="py-2">Availability</th>
            <th className="py-2">Departure Time</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {excursions.map((excursion) => (
            <tr key={excursion.id}>
              <td className="py-2 px-4 border">{excursion.name}</td>
              <td className="py-2 px-4 border">{excursion.description}</td>
              <td className="py-2 px-4 border">{new Date(excursion.date).toLocaleDateString()}</td>
              <td className="py-2 px-4 border">{excursion.price}</td>
              <td className="py-2 px-4 border">{excursion.numberOfTravelers}</td>
              <td className="py-2 px-4 border">{excursion.distance}</td>
              <td className="py-2 px-4 border">{excursion.duration}</td>
              <td className="py-2 px-4 border">{excursion.availability.join(', ')}</td>
              <td className="py-2 px-4 border">{excursion.departureTime}</td>
              <td className="py-2 px-4 border">
                <button className="mr-2 bg-blue-500 text-white py-1 px-2 rounded" onClick={() => setEditingExcursion(excursion)}>Edit</button>
                <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => deleteExcursion(excursion.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editingExcursion && (
        <div>
          <h2 className="text-xl font-bold mt-4">Edit Excursion</h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              updateExcursion(editingExcursion);
            }}
          >
            <div>
              <label className="block">Name:</label>
              <input
                className="w-full border p-2"
                type="text"
                value={editingExcursion.name}
                onChange={(e) =>
                  setEditingExcursion({ ...editingExcursion, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block">Description:</label>
              <textarea
                className="w-full border p-2"
                value={editingExcursion.description}
                onChange={(e) =>
                  setEditingExcursion({ ...editingExcursion, description: e.target.value })
                }
                required
              ></textarea>
            </div>
            <div>
              <label className="block">Price:</label>
              <input
                className="w-full border p-2"
                type="number"
                step="0.01"
                value={editingExcursion.price}
                onChange={(e) =>
                  setEditingExcursion({
                    ...editingExcursion,
                    price: parseFloat(e.target.value),
                  })
                }
                required
              />
            </div>
            <div>
              <label className="block">Date:</label>
              <input
                className="w-full border p-2"
                type="date"
                value={new Date(editingExcursion.date).toISOString().split('T')[0]}
                onChange={(e) =>
                  setEditingExcursion({ ...editingExcursion, date: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block">Number of Travelers:</label>
              <input
                className="w-full border p-2"
                type="number"
                value={editingExcursion.numberOfTravelers}
                onChange={(e) =>
                  setEditingExcursion({
                    ...editingExcursion,
                    numberOfTravelers: parseInt(e.target.value),
                  })
                }
                required
              />
            </div>
            <div>
              <label className="block">Distance:</label>
              <input
                className="w-full border p-2"
                type="number"
                value={editingExcursion.distance}
                onChange={(e) =>
                  setEditingExcursion({
                    ...editingExcursion,
                    distance: parseInt(e.target.value),
                  })
                }
                required
              />
            </div>
            <div>
              <label className="block">Duration:</label>
              <input
                className="w-full border p-2"
                type="number"
                value={editingExcursion.duration}
                onChange={(e) =>
                  setEditingExcursion({
                    ...editingExcursion,
                    duration: parseInt(e.target.value),
                  })
                }
                required
              />
            </div>
            <div>
              <label className="block">Availability (comma-separated):</label>
              <input
                className="w-full border p-2"
                type="text"
                value={editingExcursion.availability.join(', ')}
                onChange={(e) =>
                  setEditingExcursion({
                    ...editingExcursion,
                    availability: e.target.value.split(',').map((day) => day.trim()),
                  })
                }
                required
              />
            </div>
            <div>
              <label className="block">Departure Time:</label>
              <input
                className="w-full border p-2"
                type="time"
                value={editingExcursion.departureTime}
                onChange={(e) =>
                  setEditingExcursion({
                    ...editingExcursion,
                    departureTime: e.target.value,
                  })
                }
                required
              />
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">
              Update Excursion
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ExcursionList;
