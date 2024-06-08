// ExcursionList.tsx
import { useEffect, useState } from 'react';
import ExcursionCard from './ExcursionCard';
import { Excursion } from '@prisma/client';

const ExcursionList = () => {
  const [excursions, setExcursions] = useState<Excursion[]>([]);

  useEffect(() => {
    fetch('/api/excursions')
      .then(response => response.json())
      .then(data => setExcursions(data))
      .catch(error => console.error('Error fetching excursions:', error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Excursions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {excursions.map(excursion => (
          <ExcursionCard key={excursion.id} excursion={excursion} />
        ))}
      </div>
    </div>
  );
};

export default ExcursionList;
