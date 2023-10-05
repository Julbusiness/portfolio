import { useState } from "react";
import { NavLink } from "react-router-dom";
import LogoWhite from "../../assets/Logo-white.png";
import "./Sidebar.css";

export default function Sidebar() {
	const [close, setClose] = useState(false);

	const toggleMenu = () => {
		setClose(!close);
		const toggle = document.querySelector(".sidebar");
		toggle.classList.toggle("close");
	};

	return (
		<nav
			className='sidebar close'
			onMouseOver={toggleMenu}
			onMouseOut={toggleMenu}
		>
			<div className='image-text'>
				<span className='image'>
					<img src={LogoWhite} alt='logo' />
				</span>
			</div>

			<ul className='menu-links'>
				<li className='nav-link'>
					<NavLink to='/'>
						<i className='bx bx-grid-alt icon'></i>
						<span className='text nav-text'>Accueil</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/apropos'>
						<i className='bx bx-face icon'></i>
						<span className='text nav-text'>À propos</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/skills'>
						<i className='bx bx-bar-chart icon'></i>
						<span className='text nav-text'>Skills</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/projets'>
						<i className='bx bx-code-alt icon'></i>
						<span className='text nav-text'>Portfolio</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/confiance'>
						<i className='bx bx-heart icon'></i>
						<span className='text nav-text'>Il m&apos;ont fait confiance</span>
					</NavLink>
				</li>
				<li className='nav-link'>
					<NavLink to='/contact'>
						<i className='bx bx-at icon'></i>
						<span className='text nav-text'>Contact</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
