import 'animate.css';
import classNames from 'classnames';
import * as React from "react";
import qiye from '../../assets/imgs/qiye_.jpg';
import qiye_1 from '../../assets/imgs/qiye_1.jpg';
import ScrollTrigger from '../scrollTrigger';
import * as style from './index.module.less';

const App = () => {
	const [animate, setAnimate] = React.useState({ desc: style.none, img: style.none });
	// const [style, setStyle] = React.useState({ transition: "lightSpeedIn", icon: "icon-mulu" });
	const onEnterViewport = () => {
		setAnimate({
			desc: 'animate__backInLeft',
			img1: 'animate__fadeInTopRight',
			img2: 'animate__fadeInBottomLeft'
		})
	}
	const onExitViewport = () => {
		setAnimate({
			desc: style.none,
			img1: style.none,
			img2: style.none
		})
	}
	return (
		<div style={{}}>
			<ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
				<div className={style.container}>
					<div className={classNames([style.left])}>
						<div className={classNames(style.desc, 'animate__animated', animate.desc)}>
							<div className={style.title}>
								<div className={style.bgH1}>ENTERPRISE</div>
								<span>企业</span>
							</div>
							<div className={style.content}>
								<p>器必种打它业适条都能认前放你天议入它信许运，厂引题打清能列光表王产象提叫斗越们划报千团名音收拾收拾上证平值如小后中。</p>
								<p>包规儿江单安土书北行局着门统志般段，观水走研周生新志使和认象家最育我学位到运无影层状完。</p>
							</div>
						</div>
					</div>
					<div className={classNames([style.right])}>
						<div className={animate.img}>
							<img className={classNames('animate__animated', animate.img1)} src={qiye_1} style={{ width: '110%', marginLeft: '-20%', marginTop: '40px' }} />
							<img className={classNames('animate__animated', animate.img2)} src={qiye} style={{ width: '80%', marginLeft: '-40%', marginTop: '-40%' }} />
						</div>
					</div>
				</div>
			</ScrollTrigger>
		</div>
	)
}

export default App
