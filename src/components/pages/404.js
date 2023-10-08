import {Link} from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <Link style={{'display': 'block', 'fontWeght': '700', 'fontSize': '26px', 'textAlign': 'center', 'marginTop': '100px'}} to="/">This page doesn't exist! Back to main page</Link>
        </div>
    )
}

export default Page404;