import React, { Component } from 'react';
import { Modal, WingBlank } from 'antd-mobile';
import { receiveData } from '@/base/redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routers from '@/base/routes/router';

class App extends Component {
    state = {
        collapsed: false,
    };

    componentWillMount() {
        const { receiveData } = this.props;
        const user = JSON.parse(localStorage.getItem('user'));
        user && receiveData(user, 'auth');
    }

    componentDidMount() {
        // const openNotification = () => {
        //     localStorage.setItem('isFirst', JSON.stringify(true));
        //     return (
        //         <Modal
        //             visible={this.state.modal1}
        //             transparent
        //             maskClosable={false}
        //             title="Title"
        //             >
        //             <div style={{ height: 100, overflow: 'scroll' }}>
        //                 scoll content...<br />
        //                 scoll content...<br />
        //                 scoll content...<br />
        //                 scoll content...<br />
        //                 scoll content...<br />
        //                 scoll content...<br />
        //             </div>
        //         </Modal>
        //     )
        // };
        // const isFirst = JSON.parse(localStorage.getItem('isFirst'));
        // !isFirst && openNotification();
    }
    
    render() {
        const { auth } = this.props;
        return (
            <div className='container'>
                <WingBlank size='lg'>
                    <Routers auth={auth} />
                </WingBlank>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { auth = {data: {}}, responsive = {data: {}} } = state.httpData;
    return {auth, responsive};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
