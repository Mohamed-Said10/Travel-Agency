// src/components/ReservationSearchForm.tsx
const ReservationSearchForm = () => {
    return (
      <div className="w-full h-20 bg-white flex items-center justify-center px-4">
        <form className="flex space-x-4">
          <div>
            <label className="block text-gray-700">Category</label>
            <select className="border border-gray-300 rounded p-2">
              <option>Excursion</option>
              <option>Circuit</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Destination</label>
            <input type="text" className="border border-gray-300 rounded p-2" placeholder="Enter destination" />
          </div>
          <div>
            <button type="submit" className="bg-blue-500 text-white rounded p-2 mt-6">Search</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default ReservationSearchForm;
  