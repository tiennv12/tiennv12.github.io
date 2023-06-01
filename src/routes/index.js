import Home from '../component/pages/Home/Home';
import Following from '../component/pages/Followings/Following';
import Accord from '../component/pages/Followings/Accord/Accord';
import Crv from '../component/pages/Followings/Crv/Crv';
import City from '../component/pages/Followings/City/City';
import Hrv from '../component/pages/Followings/Hrv/Hrv';
import Civic from '../component/pages/Followings/Civic/Civic';
import CivicR from '../component/pages/Followings/Civic Type R/CivicR';
// import admin from '../component/pages/login/admin';
import Ad from '../component/pages/admin/ad.jsx';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/following/accord', component: Accord },
    { path: '/following/crv', component: Crv },
    { path: '/following/city', component: City },
    { path: '/following/hrv', component: Hrv },
    { path: '/following/civic', component: Civic },
    { path: '/following/civic', component: CivicR },
    // {path: '/*', component: admin},
    { path: '/*', component: Ad }
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
