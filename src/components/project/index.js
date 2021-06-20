import 'animate.css';
import classNames from 'classnames';
import * as React from "react";
import xiangmu from '../../assets/imgs/xiangmu.jpg';
import ScrollTrigger from '../scrollTrigger';
import * as style from './index.module.less';

const App = () => {
	const [animate, setAnimate] = React.useState({ desc: style.none, img: style.none });
	// const [style, setStyle] = React.useState({ transition: "lightSpeedIn", icon: "icon-mulu" });
	const onEnterViewport = () => {
		setAnimate({
			desc: 'animate__backInLeft',
			img: 'animate__fadeIn',
			img2: 'animate__fadeInBottomLeft'
		})
	}
	const onExitViewport = () => {
		setAnimate({
			desc: style.none,
			img: style.none,
		})
	}
	return (
		<div style={{}}>
			<ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
				<div className={style.container}>
					<div className={classNames([style.left])}>
						<div className={animate.img}>
							<img className={classNames('animate__animated', animate.img)} src={xiangmu} style={{ width: '100%', marginTop: '10px' }} />
						</div>
					</div>
					<div className={classNames([style.right])}>
						<div className={style.bgColor}>&nbsp;</div>
						<div className={classNames(style.desc, 'animate__animated', animate.desc)}>
							<div className={style.title}>
								<div className={style.bgH1}>ENTERPRISE</div>
								<span>项目</span>
							</div>
							<div className={style.content}>
								<p>器必种打它业适条都能认前放你天议入它信许运，厂引题打清能列光表王产象提叫斗越们划报千团名音收拾收拾上证平值如小后中。</p>
								<p>包规儿江单安土书北行局着门统志般段，观水走研周生新志使和认象家最育我学位到运无影层状完。</p>
							</div>
						</div>
					</div>
				</div>
			</ScrollTrigger>
		</div>
	)
}

export default App
