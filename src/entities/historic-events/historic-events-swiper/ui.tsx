import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.scss';
import React, { FC, RefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { HistoricEvents } from '../../../types/historic-events';
import { HistoricEventCard } from '../historic-event/ui';
import { useHistoricEventsSwiper } from '../../../features/historic-events/hooks/useHistoricEventsSwiper';

interface IYearsCardSwiperProps {
  cards: HistoricEvents;
  swiperRef: RefObject<HTMLDivElement>;
  categoryTitle: string;
}

export const HistoricEventsSwiper: FC<IYearsCardSwiperProps> = ({ categoryTitle, cards, swiperRef }) => {
  const { slidesPerView, breakpoints } = useHistoricEventsSwiper(cards);

  return (
    <div ref={swiperRef} className="historic-events__swiper">
      <p className="historic-events__swiper-title">{categoryTitle}</p>
      <button aria-label="Назад" type="button" className="historic-events__swiper-btn historic-events__swiper-btn_prev" />
      <Swiper
        modules={[Navigation, Pagination]}
        breakpoints={breakpoints}
        slidesPerView={slidesPerView}
        watchOverflow
        spaceBetween={80}
        navigation={{
          prevEl: '.historic-events__swiper-btn_prev',
          nextEl: '.historic-events__swiper-btn_next',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {cards.map(({ year, info }) => (
          <SwiperSlide key={year} className="historic-events__swiper-slide">
            <HistoricEventCard year={year} info={info} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button aria-label="Вперед" type="button" className="historic-events__swiper-btn historic-events__swiper-btn_next" />
    </div>
  );
};
