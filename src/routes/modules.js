/**
 * 路由组件出口文件
 */
import Loadable from 'react-loadable';
import {Loading} from '../components/widget';

// 按需加载
const Home = Loadable({
    loader: () => import('../containers/home/index'),
    loading: Loading
});

export default {
    Home
}