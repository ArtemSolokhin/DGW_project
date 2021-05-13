import React, {useState} from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Changes from '../Changes/Changes'

const Base = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    return(
    <div>
        <Navbar />
        <Changes />
        <Footer />
    </div>
    )
}

export default Base;