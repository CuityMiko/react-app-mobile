import React, {Component} from 'react'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'

import styles from './login_form.module.less'

class LoginForm extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <WingBlank>
                    <span className={styles.login_form}>登录页面</span>
                    <WhiteSpace size="lg" />
                    <Button type="primary">登 录</Button>
                </WingBlank>
            </div>
        )
    }
}

export default LoginForm;