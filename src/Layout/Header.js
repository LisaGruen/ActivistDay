import React from 'react';
import PropTypes from 'prop-types';
import logo from '../img/DUOHeart.png';

const Header = ({currentPage, navigateToPage, title, description, learnMore}) => {
	const current = (<span className="sr-only">(current)</span>);

	const onClickLink = (e) => {
		e.preventDefault();
		navigateToPage(e.target.dataset.slug);
	};

    return (
  		<div className="header">
	        <nav className="navbar navbar-expand-lg navbar-light bg-light">
	          <a className="navbar-brand" href="/"><img alt="logo" src={logo} /></a>
	          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	            <span className="navbar-toggler-icon"></span>
	          </button>
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
	                <a className="nav-link" onClick={onClickLink} data-slug="about" href="/about">About UNICEF Danmark {currentPage === 'about' ? current : ''}</a>
	              </li>
	            </ul>
	          </div>
	        </nav>
<div className="textbox">
			<h2>
				{title}
			</h2></div>
			
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
  description: PropTypes.string,
  learnMore: PropTypes.string
};

export default Header;