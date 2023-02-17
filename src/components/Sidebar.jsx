import Help from './Help'

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <h3>Listings</h3>
            <div>
                <ul>
                    <li className="li">all</li>
                    <li className="li">owner</li>
                    <li className="li">dealer</li>
                </ul>
            </div>
            <p>Buy and Sell your crap here, cause everyone want crap from other people.</p>
            <Help />
        </div>
    )
}


  
export default Sidebar