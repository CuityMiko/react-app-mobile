/**
 * 油卡路由
 */
import Loadable from 'react-loadable';
import {Loading} from '@/common/components/widget';

/**
 * 模块
 */

 // 油卡激活
const Activation = Loadable({ 
    loader: () => import('./containers/activation/Activation.jsx'),
    loading: Loading
})

// 油卡详情
const OilDetail = Loadable({ 
    loader: () => import('./containers/detail/OilDetail.jsx'),
    loading: Loading
})

// 路由配置
const routes = [
    {key: '/app/oilcard/activation', component: 'Activation'},
    {key: '/app/member/detail', component: 'OilDetail'}
]

const modules = {
    Activation,
    OilDetail
}

export default {
    routes,
    modules
};