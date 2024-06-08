// src/pages/index.tsx
import MenuBar from './client/excursions/components/MenuBar';
import Slideshow from './client/excursions/components/Slideshow';
import ReservationSearchForm from './client/excursions/components/ReservationSearchForm';
import ExcursionList from './client/excursions/components/ExcursionList';

const HomePage = () => {
  return (
    <div>
      <MenuBar />
      <Slideshow />
      <ReservationSearchForm />
      <div className="p-4">
        <ExcursionList />
      </div>
    </div>
  );
};

export default HomePage;
