/**
 * 组件通信
 */

import PubSub from 'pubsub-js'

/**
 * 订阅
 * @param {*} callback 
 */
export function sub_addStudent(callback) {
    PubSub.subscribe('addstudent', function(msg, data){ callback(data) });
}

/**
 * 发布
 * @param {*} data 
 */
export function pub_addStudent(data) {
    PubSub.publish('addstudent', data);
}

/**
 * 订阅
 * @param {*} callback 
 */
export function sub_delStudent(callback) {
    PubSub.subscribe('delstudent', function(msg, data){ callback(data) });
}

/**
 * 发布
 * @param {*} data 
 */
export function pub_delStudent(data) {
    PubSub.publish('delstudent', data);
}