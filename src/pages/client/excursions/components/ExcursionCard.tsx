// ExcursionCard.tsx
interface Excursion {
    id: number;
    name: string;
    description: string;
    // Add more properties as needed
  }
  
  const ExcursionCard = ({ excursion }: { excursion: Excursion }) => {
    return (
      <div className="border border-gray-200 rounded p-4 mb-4">
        <h3 className="font-bold text-lg mb-2">{excursion.name}</h3>
        <p className="text-gray-600">{excursion.description}</p>
        {/* Add more details as needed */}
      </div>
    );
  };
  
  export default ExcursionCard;
  