import {Link} from "react-router-dom"

export default function NavigationLink(props) {
    const {linkDestination} = props
    return (
        <li>
            <Link to={`${linkDestination}`}>{linkDestination}</Link>
        </li>
    )
}