import './styles.scss';
import React, { FC } from 'react';
import { HistoricEventsRange } from '../../entities/historic-events/historic-events-range/ui';
import { UiTitle } from '../../shared/ui-components/ui-title/ui-title';
import { HistoricEventsNavigation } from '../../entities/historic-events/historic-events-navigation/ui';
import { HistoricEventsSwiper } from '../../entities/historic-events/historic-events-swiper/ui';
import { CATEGORIES_TOTAL_COUNT, HISTORIC_EVENTS_DATA } from '../../shared/constants/mock-api';
import { HistoricEventsCircle } from '../../entities/historic-events/historic-events-circle/ui';
import { PeriodDirection, useHistoricEvents } from '../../features/historic-events/hooks/useHistoricEvents';

export const HistoricEventsPage: FC = () => {
  const {
    firstYearRef,
    lastYearRef,
    lastYear,
    firstYear,
    events,
    currentEvents,
    categories,
    timeOfRotation,
    selectedCategory,
    changePeriodOrCategory,
    handlePeriodChange,
    selectedPeriod,
    sliderRef,
    mainCircleRef,
    angle,
  } = useHistoricEvents();

  return (
    <div className="wrapper">
      <section className="historic-events">
        <UiTitle>Исторические даты</UiTitle>
        <HistoricEventsRange lastYearRef={lastYearRef} firstYear={firstYear} lastYear={lastYear} firstYearRef={firstYearRef} />
        <HistoricEventsCircle
          mainCircleRef={mainCircleRef}
          angle={angle}
          timeOfRotation={timeOfRotation}
          categories={categories}
          categoriesTotalCount={CATEGORIES_TOTAL_COUNT}
          changePeriodOrCategory={changePeriodOrCategory}
          selectedCategory={selectedCategory}
        />
        <HistoricEventsNavigation
          numberOfEvents={events.length}
          currentEvent={selectedPeriod}
          loadNextPeriod={handlePeriodChange(PeriodDirection.Next)}
          loadPreviousPeriod={handlePeriodChange(PeriodDirection.Prev)}
        />
        <HistoricEventsSwiper swiperRef={sliderRef} cards={currentEvents} categoryTitle={HISTORIC_EVENTS_DATA[selectedCategory].categoryTitle} />
      </section>
    </div>
  );
};
