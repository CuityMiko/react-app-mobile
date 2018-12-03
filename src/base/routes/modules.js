/**
 * 路由组件出口文件
 */

// 首页
import Home from '@/home/home.route'

// 会员卡
import MemberCard from '@/member_card/member_card.route'

// 油卡
import OilCard from '@/oil_card/oil_card.route'

export default {
    ...Home.modules,
    ...MemberCard.modules,
    ...OilCard.modules
}