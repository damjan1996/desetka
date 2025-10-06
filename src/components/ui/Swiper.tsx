'use client';

import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface CustomSwiperProps {
    children: ReactNode;
    options?: SwiperOptions;
    className?: string;
}

export function CustomSwiper({ children, options = {}, className = '' }: CustomSwiperProps) {
    const defaultOptions: SwiperOptions = {
        modules: [Navigation, Pagination, Autoplay, EffectFade],
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        ...options,
    };

    return (
        <Swiper {...defaultOptions} className={className}>
            {children}
        </Swiper>
    );
}

export { SwiperSlide };