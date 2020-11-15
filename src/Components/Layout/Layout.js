import React from 'react'
// import Navbar from '../Navigations/Navbar/Navbar'
import Wrapper from '../../hoc/Wrapper'

import './Layout.css'

const Layout = (props) => {
    return (
        <div className="inner">
            <Wrapper>
                <main className="content">{props.children}</main>
            </Wrapper>
        </div>
    )
}

export default Layout