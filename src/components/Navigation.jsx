import {useState, useEffect} from 'react'
import NavigationLink from './NavigationLink'






export default function Navigation (){
    const [pageLinks, setPageLinks] = useState(["ViewPage", "SellPage", "Orders", "Basket", "User", "AllUsers"])

    return (
        <>
        <nav>
            <ul>
                {pageLinks.map((linkName) => {
                    return <NavigationLink key = {linkName} linkDestination={linkName} />
                })}
            </ul>
            </nav>
         </>
       
    )
}
