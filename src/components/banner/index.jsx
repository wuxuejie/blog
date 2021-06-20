
import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import xiala from '../../assets/icon/xiala@2x.png';
import { useViewport } from '../useViewport';
import "./effect-fade.less";
import "./navigation.less";
import "./pagination.less";
import "./styles.less";
import "./swiper.less";

// SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
SwiperCore.use([Autoplay, EffectFade, Navigation]);


const scrollTo = (ref) => {
	if (!isScroll) {
		isScroll = true;
		console.log('scrollTo(ref.current)');
		window.scrollTo({ top: ref.clientHeight, left: 0, behavior: 'smooth' });
	}
}

let preTop = 0;
let isScroll = false;
export default function App({ data }) {
	const { scrollTop } = useViewport();
	const ref = React.useRef();
	if (ref.current) {
		if (preTop < scrollTop) {// 下拉		
			if (scrollTop > ref.current.clientHeight * 0.3) {
				// _.throttle(() => scrollTo(ref.current), 2000)();
				// setTimeout(() => {
				// 	isScroll = false
				// }, 2000);
			}
		} else {
		}
	}
	preTop = scrollTop;
	return (
		<div id="banner" ref={ref} style={{ position: 'relative' }}>
			<Swiper
				effect={'fade'}
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					"delay": 5000,
					"disableOnInteraction": false
				}}
				navigation={true}
				className="mySwiper"
			>
				{data.map(p =>
					<SwiperSlide key={p.id}>
						<img src={p.publicURL} />
					</SwiperSlide>)}
			</Swiper>
			<div style={{ position: 'absolute', width: '100%', display: 'flex', justifyContent: 'center', bottom: 10, zIndex: 100, }}>
				<img src={xiala} onClick={() => scrollTo(ref.current)} />
			</div>
		</div>
	)
}