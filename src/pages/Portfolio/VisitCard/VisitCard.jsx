import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../../features/modal";
import { slideNumber } from "../../../features/slide";
import { Link } from "react-router-dom";

import Bandeau from "../../../components/Bandeau/Bandeau";
import imageBandeau from "/assets/images/bandeaux-sticky/bandeau-sticky5.png";
import Title from "../../../components/Title/Title";
import data from "../../../data/data.json";
import RightCard from "../../../components/Cards/RightCard/RightCard";
import Modal from "../../../components/Modal/Modal";
import BackBtn from "../../../components/Buttons/BackBtn/BackBtn";

import "./VisitCard.css";

export default function VisitCard() {
	const modal = useSelector((state) => state.modal);
	const slide = useSelector((state) => state.slide.value);
	const dispatch = useDispatch();

	const visitCardData = data.portfolioData.visitCard;
	const modalData = visitCardData[0].modalImage;

	let content;
	content = visitCardData.map((card, index) => (
		<Link
			to='#'
			className='link'
			key={card.id}
			onClick={() => {
				dispatch(openModal());
				dispatch(slideNumber(index));
			}}
		>
			<li>
				<RightCard
					image={`/assets/images/visitCard/${card.image}`}
					title={card.title}
					text={card.text}
				/>
			</li>
		</Link>
	));

	let contentModal;
	contentModal = (
		<li key={modalData[slide].id}>
			<img
				src={`/assets/images/visitCard/${modalData[slide].image}`}
				alt=''
				className='image-modal'
			/>
		</li>
	);

	return (
		<section className='visitCard'>
			<Bandeau image={imageBandeau} />
			<div className='visitCard-container'>
				<BackBtn />
				<div className='title-start'>
					<Title title='Carte de visite' />
				</div>
				<div className='visitCard-cards'>
					<ul>
						{modal.value && <Modal data={modalData} content={contentModal} />}
						<div className='galleryImages'>{visitCardData && content}</div>
					</ul>
				</div>
			</div>
		</section>
	);
}
