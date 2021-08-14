import { Header, Footer } from '../layout';
import AppRoutes from './AppRoutes';

import './reset.css';
import './App.css';

function App() {
	return (
		<div style={{width:'95%', maxWidth:'1600px', margin:'auto'}}>
            <Header/>
			<AppRoutes/>	
            <Footer/>
        </div>
		
	);
}

export default App;
