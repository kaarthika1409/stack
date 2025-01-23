import { Link } from 'react-router-dom'
import '../../css/Navbar.css'
import { useState } from 'react'
const Navbar = (onLogout) => {
    var [dropdown, showDropdown] = useState(false)
    //const toggleDropdown=()=>{
    // showDropdown(dropdown=> !dropdown)
    //}
    return (<header>
        <nav>
            <ol>

                <li><Link to='/' className="link">Home</Link></li>
                <li><Link to='/About' className="link">About</Link></li>
                <li><Link to='/Gallery' className="link" >Gallery</Link></li>
                <li><Link to='/Contact' className="link">Contact</Link></li>
                <div>
                    <span onMouseEnter={() => { showDropdown(true) }} onMouseLeav={() => { showDropdown(false) }}>Hooks</span>
                    {dropdown &&
                        (
                            <ul>
                                { <li><Link to='/useState'>useState</Link></li> }
                                {<li><Link to='/useEffect'>useEffect</Link></li>}
                                {<li><Link to='/useEffectAPI' >useEffectAPI</Link></li>}
                                {<li><Link to='/use-ref' >useRef</Link></li>}
                                {<li><Link to='/use-memo' >useMemo</Link></li>}
                                {<li><Link to='/use-call' >useCall</Link></li>}

                            </ul>
                        )
                    }
                </div>
                <li><Link to='/UseState' class="link">UseState</Link></li>
                <li><Link to='/UseEffect' class="link">UseEffect</Link></li>
                <li><Link to='/UseEffectAPI' class="link">UseEffectAPI</Link></li>
                <li><Link to='/UseEffectImageAPI' class="link">UseEffectImageAPI</Link></li>
                <li><Link to='/' className="link" onClick={onLogout}>Logout</Link></li>
            </ol>
        </nav>
    </header>)

}
export default Navbar;