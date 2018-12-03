/**
 * 处理状态
 */

import {combineReducers} from 'redux'

import * as type from './action-types'

/**
 * 引入各个模块的reducers
 */

// 登录
import LoginReducers from '@/login/redux/reducers';

// 首页
import HomeReducers from '@/home/redux/reducers';

// 会员卡
import MemberCardReducers from '@/member_card/redux/reducers';

// 油卡
import OilCardReducers from '@/oil_card/oil_card.reducer';

/**
 * 公共reducer
 */

const handleData = (state = {isFetching: true, data: {}}, action) => {
    switch (action.type) {
        case type.REQUEST_DATA:
            return {...state, isFetching: true};
        case type.RECEIVE_DATA:
            return {...state, isFetching: false, data: action.data};
        default:
            return {...state};
    }
};

const httpData = (state = {}, action) => {
    switch (action.type) {
        case type.RECEIVE_DATA:
        case type.REQUEST_DATA:
            return {
                ...state,
                [action.category]: handleData(state[action.category], action)
            };
        default:
            return {...state};
    }
};

// 多函数组合
export default combineReducers({
  httpData,
  ...LoginReducers,
  ...HomeReducers,
  ...MemberCardReducers,
  ...OilCardReducers
})

