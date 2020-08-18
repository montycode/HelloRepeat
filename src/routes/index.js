import Home from '../pages/Home';
import Error404 from '../pages/Error404';

const routes = {
    '/': Home,
}

const router = async () => {
    const home = null || document.getElementById('home');

    home.innerHTML = await Home;

}

export default router;