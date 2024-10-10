import './App.scss';
import React, { FC } from 'react';
import { HistoricEventsPage } from './pages/historic-events-page/ui';

const App: FC = () => {
  return (
    <main className="main">
      <HistoricEventsPage />
    </main>
  );
};

export default App;
