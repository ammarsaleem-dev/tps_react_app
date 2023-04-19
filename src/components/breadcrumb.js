import { useLocation } from 'react-router-dom';
import './breadcrumb.css'

function Breadcrumb() {
    const location = useLocation();
    const count = location.pathname.split('/').length;
    const pathname = location.pathname;
    const segments = pathname.split('/').slice(1, count);
    return (
        <div className='breadcrumb'>
            <ul>
                {
                    segments.map((item, index) => {
                        if (item === '') {

                            return <li key={index}><a href='##'>Home</a></li>
                        } else {

                            return <li key={index}><a href='##'>{item}</a></li>
                        }
                    })

                }
            </ul>
        </div>

    )
}

export default Breadcrumb;