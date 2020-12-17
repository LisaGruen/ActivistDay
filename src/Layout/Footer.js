import React from 'react';
import logoU from '../img/UnicefLogo.png';

const Footer = () => {
    return (
  		<div className="footer ">
			  <div className="container">
				  <h2>Kontakt</h2>
	        <div className="row">
	          <div className="col-sm">
			  This is a project from<br></br>
			  Zoe Kenndal Shafir<br></br>
Lisa Grünwaldt<br></br>

	          </div>
	        
	          <div className="col-sm">
			  Final exam project​ at KEA<br></br>
in collaboration with<br></br>
UNICEF Danmark
	          </div>
			  <div className="col-sm">
			  <a className="footer-brand" href="/"><img alt="logo UNICEF" src={logoU} /></a>
	          </div></div>
	        </div>
      	</div>
	);
};

export default Footer;