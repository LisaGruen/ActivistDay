import React from 'react';
import Card from './Card';
import unicef12 from '../img/UNICEF12.jpg';

const History = () => {
    return (
        
			<div className="history_container">
				
				<div className="container">
				    <h2>Greta og Malala som et godt eksempel</h2>
	        	    <p>Det følgende afsnit vil præsentere en række historiske eksempler, som kan bruges i det første modul til at illustrere aktivismens betydning for nutidens samfund. Disse kan være udgangspunktet for en fremlæggelse, men du er også selv velkommen til at skræddersy dit eget forløb. Vi  starter tilbage i antikken, og fortsætter helt frem til det 20-århundrede. </p>
					<iframe width="420" height="315"
					src="https://www.youtube.com/embed/tgbNymZ7vqY">
					</iframe>
					<h2>Headline Timeline</h2>
					<p>Det følgende afsnit vil præsentere en række historiske eksempler, som kan bruges i det første modul til at illustrere aktivismens betydning for nutidens samfund. Disse kan være udgangspunktet for en fremlæggelse, men du er også selv velkommen til at skræddersy dit eget forløb. Vi  starter tilbage i antikken, og fortsætter helt frem til det 20-århundrede. </p>
				</div>
				
				<div className="history">
					<div className="container">
						<section className="rettigheder">
							<h2>Børnenes rettigheder</h2>
							<p>Rettigheder er noget, som et barn har behov for og ret til. Det betyder at man har lov og krav til en række ting. Rettigheder kan derfor karakteriseres som en slags regel, og hvis disse ikke er opfyldt har vi har at gøre med en uretfærdig situation for barnet. Artiklerne i Børnekoventionen kan relateres til børnenes hverdag i en snak om retfærdighed og uretfærdighed.</p>

							<div className="cards">
								<div className="row gy-5">
									<div class="col-6">
										<Card image={unicef12} text="Blah blah blah blah blah" />
									</div>
									<div class="col-6">
										<Card image={unicef12} text="Blah blah blah blah blah" />
									</div>
									<div class="col-6">
										<Card image={unicef12} text="Blah blah blah blah blah" />
									</div>
									<div class="col-6">
										<Card image={unicef12} text="Blah blah blah blah blah" />
									</div>
								</div>
					
							</div>
						</section>
					</div>
				</div>

				<div className="container">
				    <h2>Game</h2>
	        	    <p>Det følgende afsnit vil præsentere en række historiske eksempler, som kan bruges i det første modul til at illustrere aktivismens betydning for nutidens samfund. Disse kan være udgangspunktet for en fremlæggelse, men du er også selv velkommen til at skræddersy dit eget forløb. Vi  starter tilbage i antikken, og fortsætter helt frem til det 20-århundrede. </p>
					<iframe
					src="http://zoekenndal.dk/4sem/nebula/">
					</iframe>
				</div>
			</div>      	
	);
};

export default History;