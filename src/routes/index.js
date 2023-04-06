import Home from '../component/pages/Home/Home';
import Following from '../component/pages/Followings';
import Accord from '../component/pages/Followings/Accord/Accord'
import Crv from '../component/pages/Followings/Crv/Crv';
import City from '../component/pages/Followings/City/City';
import Hrv from '../component/pages/Followings/Hrv/Hrv';
import Civic from '../component/pages/Followings/Civic/Civic';
import CivicR from '../component/pages/Followings/Civic Type R/CivicR';





const publicRoutes =[
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/following/accord', component: Accord},
    {path: '/following/crv', component: Crv},
    {path: '/following/city', component: City},
    {path: '/following/hrv', component: Hrv},
    {path: '/following/civic', component: Civic},
    {path: '/following/civic', component: CivicR},

    

 

]

const privateRoutes=[

]

export {privateRoutes, publicRoutes}