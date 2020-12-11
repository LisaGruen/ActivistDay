import React, { useState, useEffect } from 'react';
import Header from './Layout/Header.js';
import Footer from './Layout/Footer.js';
import Content from './Layout/Content.js';


const App = () => {
  const apiUrl = "http://lisagruenwaldt.com/huset_wp/wp-json/wp/v2/unicef-content";

  const [loaded, setLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [pageContent, setPageContent] = useState({});

  /**
  * Load article via Wordpress API.
  */
  const fetchDataFromAPI = async (path) => {
    return await fetch(path).then((res) => res.json());
  };

  const fetchData = () => {
    setLoaded(false);
    fetchDataFromAPI(apiUrl)
      .then((pages) => {
        let p = {};
        for (let i = 0; i < pages.length; i++) {
          if (pages[i].slug === currentPage) {
            p = pages[i];
          }
        }

        setPageContent(p);
        setLoaded(true);
      })
      .catch(() => {
      
      });
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const navigateToPage = (page) => {
    setCurrentPage(page);
  }

  console.log(pageContent);

  return (
    <>
      <header>
        <Header 
          currentPage={currentPage}
          navigateToPage={navigateToPage}
          title={pageContent.pagetitle}
          description={pageContent.description}
          learnMore={pageContent.learnmore}
        />
      </header>

      <main>
      {
        loaded ? (
          <Content 
            currentPage={currentPage} 
            pageContent={pageContent} 
          />) : (
            <div>Loading...</div>
          )
      }
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
