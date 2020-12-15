import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/AktivismeDagLogo_02.png';

const Header = ({currentPage, navigateToPage, title, description, learnMore, pagetitel2}) => {
	const current = (<span className="sr-only">(current)</span>);

	const onClickLink = (e) => {
		e.preventDefault();
		navigateToPage(e.target.dataset.slug);
	};

    return (
  		<div className="header">
	        <nav className="navbar navbar-expand-lg navbar-light bg-light">
	          <a className="navbar-brand" href="/"><img alt="logo" src={logo} /></a>

	          <div className="menu collapse navbar-collapse" id="navbarNavDropdown">
	            <ul className="navbar-nav">
				<li className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}>
	                <a className="nav-link" onClick={onClickLink} data-slug="home" href="/home">Home {currentPage === 'home' ? current : ''}</a>
	              </li>
	              <li className={`nav-item ${currentPage === 'history' ? 'active' : ''}`}>
	                <a className="nav-link" onClick={onClickLink} data-slug="history" href="/history">History {currentPage === 'history' ? current : ''}</a>
	              </li>
	              <li className={`nav-item ${currentPage === 'workshops' ? 'active' : ''}`}>
	                <a className="nav-link" onClick={onClickLink} data-slug="workshops" href="/workshops">Workshops {currentPage === 'workshops' ? current : ''}</a>
	              </li>
	              <li className={`nav-item ${currentPage === 'guide' ? 'active' : ''}`}>
	                <a className="nav-link" onClick={onClickLink} data-slug="guide" href="/guide">Teachers guide {currentPage === 'guide' ? current : ''}</a>
	              </li>
	               <li className={`nav-item ${currentPage === 'about' ? 'active' : ''}`}>
	                <a className="nav-link" onClick={onClickLink} data-slug="about" href="/about">About{currentPage === 'about' ? current : ''}</a>
	              </li>
	            </ul>
	          </div>
	        </nav>
<div className="textbox_1">
			<h1>
				{title}
			</h1></div>
			<div className="textbox_2">
			<h1>
				{pagetitel2}
			</h1></div>
			
			<div className="description">
				{description}
			</div>
      	</div>
	);
};

Header.propTypes = {
  currentPage: PropTypes.string,
  navigateToPage: PropTypes.func,
  title: PropTypes.string,
  pagetitel2: PropTypes.string,
  description: PropTypes.string,
  learnMore: PropTypes.string
};

export default Header;