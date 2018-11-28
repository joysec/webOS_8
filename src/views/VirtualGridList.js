import {GridListImageItem} from '@enact/moonstone/GridListImageItem';
import Layout, {Cell} from '@enact/ui/Layout';
import React from 'react';
//import Region from '@enact/moonstone/Region';
import ri from '@enact/ui/resolution';
//import ToggleButton from '@enact/moonstone/ToggleButton';
import {VirtualGridList} from '@enact/moonstone/VirtualList';
import ReactPlayer from 'react-player';
import Notification from '@enact/moonstone/Notification';
import Button from '@enact/moonstone/Button';
import StarRatings from 'react-star-ratings';

import css from './VirtualGridList.less';

const titleArray = ['출국', '보헤미안 랩소디', '뷰티 인사이드', '아쿠아 맨','성난 황소','완벽한 타인','베일리 어게인','바울'
,'국가부도의 날','후드','그린델왈드의 범죄','거미줄에 걸린 소녀','베일리 어케인','바울','피티와 친구들','로빈슨의 언더워터 어드벤처',
'폴란드로 간 아이들','저니스 엔드','28세 미성년','번더스테이지','스타이즈 본','영주','너의 췌장을 먹고싶어','리스펙트',
'택시5','인디아일','툴리','화씨 11/9:틀럼프의 시대','페르세폴리스','해피투게더','새벽의 약속','마담B','집의 시간들',
'군산: 거위를 노래하다','뷰티풀데이즈','펜텀스레드','여곡성','풀잎들','그랜드 부타페스트 호텔','창궐','해피댄싱',
'카메라를 멈추면 안돼!','미쓰백','필름스타 리버풀','박물관이 진짜 살아있다','캡틴 샤키','하나식당','프리다의 그해 여름',
'나츠메 우인장: 세상과 연을 맺다','춘천, 춘천','타샤튜더','1991,봄','맨체스터 바이더씨','베놈','하녀','퍼스트맨','에스코바르',
'인어 전설','밤치기'];
const imageArray = ['https://movie-phinf.pstatic.net/20181022_106/1540170285123a57tG_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181031_68/1540952503496fNRsF_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20150820_140/14400325489289j4Fh_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181119_157/15425904764434IQke_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181031_241/1540950975705Bac4v_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181106_289/1541478936071tmadh_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181031_264/1540949415228uy0j3_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181126_296/1543195305541TXc6u_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181105_232/1541392865465aVb5V_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181031_91/1540952362335FhIxg_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181029_21/1540774701820gU85o_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181121_34/1542780774766HVkku_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181031_264/1540949415228uy0j3_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181126_296/1543195305541TXc6u_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181030_70/1540866935073nXtGD_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181023_49/1540269777397VIFnu_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181004_63/1538615669479nezAh_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181112_55/1541989761464YmThe_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181107_156/15415675996435hqsG_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181109_286/1541743345207CtoXg_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20180912_118/1536714294340kLm2Y_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181030_246/1540890794923n6bvy_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181026_40/1540518904460lgFIb_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181120_178/1542693670306UzSbV_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181101_6/15410499053179Yp7F_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181108_51/1541664438850O5VUE_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181031_119/15409491972280Be0x_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181030_9/1540876278285J7DkR_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181024_132/1540362532973OdDEA_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181116_119/1542355085445eqNwH_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181029_256/1540781383069dLTLt_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181030_126/1540874871840gCMoh_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181011_122/1539222437636FNUvf_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181017_9/1539741092982WEvyC_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181022_44/1540184975122jj5PS_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20180212_187/1518418583374h2FTQ_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181017_83/15397650480164Sm4J_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181008_128/15389618147536vcgF_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20180927_158/1538023433590U7S2w_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181001_87/15383614506431bq1D_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181019_127/1539940387423QqpKd_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20180803_256/1533261235021CdsLO_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181011_124/15392221324972UPeA_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181002_200/15384588204057VLny_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181108_98/1541638739931hvAnU_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181018_51/1539848348762RxgRn_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181023_101/1540259085238Qvvq4_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181008_299/1538964980887VIEnn_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181004_52/1538638118841yV74b_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20180906_41/1536213320370T6XeH_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20180817_13/1534473493720DoFgP_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181008_286/1538989668680KEozY_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20170405_195/1491374662721M3eIY_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20180921_296/1537498027382AK7eg_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20111223_110/1324615355673DjB9C_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20180921_295/1537492322557T4mGt_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181022_167/1540186383268X1GcB_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181106_248/1541466413285z4VaE_JPEG/movie_image.jpg',
					'https://movie-phinf.pstatic.net/20181001_78/1538372743248xQ2Tz_JPEG/movie_image.jpg'];
const date = ['2018.11.14','2018.10.31','2015.08.20','2018.12.19','2018.11.22','2018.10.31','2018.11.22','2018.10.31',
'2018.11.28','2018.11.28','2018.11.14','2018.11.28','2018.11.22',' 2018.10.31',
'2018.11.15','2018.11.14','2018.10.31','2018.11.28','2018.11.21','2018.11.15','2018.10.09',
'2018.11.22','2018.11.15','2018.11.28','2018.11.22','2018.11.22','2018.11.22','2018.11.22','2018.11.15','2018.11.15',
'2018.11.22','2018.11.15','2018.10.25','2018.11.08','2018.03.08','2018.11.08','2018.10.25',
'2018.10.25','2018.10.11','2018.10.25','2018.11.22','2018.11.15','2018.08.23','2018.10.11','2018.10.25','2018.11.08',
'2018.11.22','2018.11.22','2018.10.25','2018.10.31','2018.09.26','2018.09.13','2018.10.31','2017.02.15',
'2018.10.03','2010.06.03','2018.10.18','2018.11.15','2018.11.15',' 2018.11.01'];

const movie_video = ['https://www.youtube.com/watch?v=Ep0_lUbtOJE',
					 'https://www.youtube.com/watch?v=XTZko22Ze3o',
					 'https://www.youtube.com/watch?v=ESPFTY8Y-xM',
					 'https://www.youtube.com/watch?v=KbTJ_vxOJtw',
					 'https://www.youtube.com/watch?v=u3CwwMJtgdk',
					 'https://www.youtube.com/watch?v=-UWdeFywycs',
					 'https://www.youtube.com/watch?v=Z_oSv9y3AL4',
					 'https://www.youtube.com/watch?v=TRESgU-obwQ',
					'https://www.youtube.com/watch?v=vk9NsxK-a6g',
				'https://www.youtube.com/watch?v=-4uY6BgOTME',
			'https://www.youtube.com/watch?v=e3FJbw5rXmM',
		'https://www.youtube.com/watch?v=FcfhreRH0pQ',
	'https://www.youtube.com/watch?v=Z_oSv9y3AL4',
'https://www.youtube.com/watch?v=TRESgU-obwQ',
'https://www.youtube.com/watch?v=XGEhwPb-9so',
'https://www.youtube.com/watch?v=QFLVuJ_vKOo',
'https://www.youtube.com/watch?v=9_X8yElokjQ',
'https://www.youtube.com/watch?v=kYFCaYbydgw',
'https://www.youtube.com/watch?v=mdCbNZ2HdaA',
'https://www.youtube.com/watch?v=vYzXnvBU4BE',
'https://www.youtube.com/watch?v=zQrnZXZCStY',
'https://www.youtube.com/watch?v=MBS3kZMqSuM',
'https://www.youtube.com/watch?v=fjMsrST6QE4',
'https://www.youtube.com/watch?v=9K7J03a7Ea8',
'https://www.youtube.com/watch?v=KOk7bAHYf60',
'https://www.youtube.com/watch?v=uzePunUolaU',
'https://www.youtube.com/watch?v=B5B4ie_DRNI',
'https://www.youtube.com/watch?v=4Vg7st4O2uY',
'https://www.youtube.com/watch?v=G192RKlap2g',
'https://www.youtube.com/watch?v=6O6GFvhYplQ',
'https://www.youtube.com/watch?v=FTwgpfiY8z8',
'https://www.youtube.com/watch?v=JhsCuufTiu4',
'https://www.youtube.com/watch?v=HRZI2Hw2_Pk',
'https://www.youtube.com/watch?v=olRhXcKfnZs',
'https://www.youtube.com/watch?v=iVLT2D_pOkQ',
'https://www.youtube.com/watch?v=Cy6Ui0yzdwM',
'https://www.youtube.com/watch?v=2fGnxPRstIg',
'https://www.youtube.com/watch?v=_Zbz838Adn0',
'https://www.youtube.com/watch?v=bBrTTSlCzNk',
'https://www.youtube.com/watch?v=qHmQE93hVmA',
'https://www.youtube.com/watch?v=NJGRDl5vfVc',
'https://www.youtube.com/watch?v=1bz16SVPK2M',
'https://www.youtube.com/watch?v=EywPeg8BqyY',
'https://www.youtube.com/watch?v=fLwpqaNnANQ',
'https://www.youtube.com/watch?v=ItXxW6DDSDE',
'https://www.youtube.com/watch?v=NlJbZ9WD2L8',
'https://www.youtube.com/watch?v=jO6QQ10lVlc',
'https://www.youtube.com/watch?v=TLKmfelkp8o',
'https://www.youtube.com/watch?v=zAW5Rd4PUo0',
'https://www.youtube.com/watch?v=ui4tGpYQOYU',
'https://www.youtube.com/watch?v=AO4iVe7q4X0',
'https://www.youtube.com/watch?v=j6P4gazbSmo',
'https://www.youtube.com/watch?v=i6t-Ipk9NkA',
'https://www.youtube.com/watch?v=SgxAx7E-jjE',
'https://www.youtube.com/watch?v=xsKvYulQrhM',
'https://www.youtube.com/watch?v=QVk-PU1xMjQ',
'https://www.youtube.com/watch?v=y518xLkC2Zk',
'https://www.youtube.com/watch?v=YTkMOqJFpy4',
'https://www.youtube.com/watch?v=Cg2nIo8Dmnc'];
const
	items = [];
for (let i = 0; i < titleArray.length; i++) {
	const
		text = titleArray[i],
		subText = date[i],
		source = imageArray[i]
	items.push({text, subText, source});
}

class VirtualGridListView extends React.Component {
	constructor () {
		super();
		this.state = {
			isHorizontalList: true,
			num: 0
		};
	}

	handleOpen = (num) => () => {
		this.setState({
			open: true,
			num: num
		});
	}

	handleClose = () => {
		this.setState({
			open: false
		});
	}

	renderItem = ({index, ...rest}) => {
		const
			{text, subText, source} = items[index];

		return (
			<GridListImageItem
				{...rest}
				onClick={this.handleOpen(index)}
				css={{subCaption: css.subCaptionImage}}
				caption={text}
				source={source}
				subCaption={subText}/>
		);
	};

	render () {
		return (
			<Layout orientation="vertical">
				<Cell
					component={VirtualGridList}
					dataSize={items.length}
					direction={'horizontal'}
					focusableScrollbar
					itemRenderer={this.renderItem}
					itemSize={{
						minWidth: ri.scale(405),
						minHeight: ri.scale(700)
					}}
				/>
				<Notification
					style={{
						margin: 600 + 'px',
						left: '20%'
					}}
					open={this.state.open}
					onClose={this.handleClose}>
					<span><center>예고편</center>
					<ReactPlayer
					style={{
						height: 550+'px',
						width : 800+'px',
						marginRight : 150+'px',
						marginBottom : 150+'px'
						}}
						url={movie_video[this.state.num]}
						playing controls  />
						</span>
						<div style={{marginBottom: -56 + 'px', fontSize: 15 + 'px', paddingRight: 5 + 'px'}}>영화 제목: {titleArray[this.state.num]}</div>
						<div style={{display: 'inline', fontSize: 15 + 'px', paddingRight: 5 + 'px'}}>평점</div>
						<StarRatings
							style={{margin: 25 + 'px'}}
							rating={Math.random() * 4 + 3}
							starRatedColor="blue"
							starDimension="30px"
							numberOfStars={6}
							name='rating'
						/>
					<buttons>
						<Button onClick={this.handleClose}
						style={{
							marginTop: 10+'px'
						}}>닫기</Button>
					</buttons>
				</Notification>
			</Layout>
		);
	}
}

export default VirtualGridListView