import React from 'react';
import PropTypes from 'prop-types';


const Content = ({currentPage, pageContent}) => {

    return (
  		<div className="Content container">
  		<div dangerouslySetInnerHTML={{
		    __html: pageContent.content ? pageContent.content.rendered : ''
		  }}>
	     </div>   
      	</div>
	);
};

Content.propTypes = {
  currentPage: PropTypes.string,
  pageContent: PropTypes.object
};

export default Content;