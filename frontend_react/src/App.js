import React from 'react' ;
import {About, Blogs, Footer, Header, Skills, Work} from './container/index' ;
import {Navbar} from './components/index' ;
import './App.scss' ;
const App = () => {

    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Blogs />
            <Skills />
            <Footer />
        </div>
    )
}

export default App ;