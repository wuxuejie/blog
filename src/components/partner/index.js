import 'animate.css';
import * as React from "react";
import face1 from '../../assets/face/face1.png';
import face2 from '../../assets/face/face2.png';
import face3 from '../../assets/face/face3.png';
import face4 from '../../assets/face/face4.png';
import face5 from '../../assets/face/face5.png';
import face6 from '../../assets/face/face6.png';
import face7 from '../../assets/face/face7.png';
import face8 from '../../assets/face/face8.png';
import ScrollTrigger from '../scrollTrigger';
import * as style from './index.module.less';

const list = [{
	name: 'Kate Doyle',
	position: '创始人兼CEO',
	desc: '太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是…',
	face: face1
}, {
	name: 'Kate Doyle',
	position: '创始人兼CEO',
	desc: '太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是…',
	face: face2
}, {
	name: 'Kate Doyle',
	position: '创始人兼CEO',
	desc: '太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是…',
	face: face3
}, {
	name: 'Kate Doyle',
	position: '创始人兼CEO',
	desc: '太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是…',
	face: face4
}, {
	name: 'Kate Doyle',
	position: '创始人兼CEO',
	desc: '太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是…',
	face: face5
}, {
	name: 'Kate Doyle',
	position: '创始人兼CEO',
	desc: '太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是…',
	face: face6
}, {
	name: 'Kate Doyle',
	position: '创始人兼CEO',
	desc: '太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是…',
	face: face7
}, {
	name: 'Kate Doyle',
	position: '创始人兼CEO',
	desc: '太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是太将做七转复斗的按口反太受动并第术运层支龙信入变要压性列许千从米连专界酸西风起。型员大七身战是…',
	face: face8
},]
const App = () => {
	const [animate, setAnimate] = React.useState({ person: style.none });
	// const [style, setStyle] = React.useState({ transition: "lightSpeedIn", icon: "icon-mulu" });
	const onEnterViewport = () => {
		setAnimate({
			person: 'animate__zoomIn'
		})
	}
	const onExitViewport = () => {
		setAnimate({
			person: style.none,
		})
	}
	const left = list.filter((p, i) => i % 2 == 1);
	const right = list.filter((p, i) => i % 2 == 0);
	return (
		<div id="partner" style={{ paddingTop: '60px' }}>
			<ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
				<div className={style.container}>
					<div className={style.title}>
						<div className={style.bgH1}>PARTNER</div>
						<span>战略合作伙伴</span>
					</div>
					<div className={style.list}>
						{list.map(p => <div className={style.item}>
							<img src={p.face} />
						</div>)}
					</div>
				</div>
			</ScrollTrigger>
		</div>
	)
}

export default App
