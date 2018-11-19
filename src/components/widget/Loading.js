import React from 'react';
import { ActivityIndicator } from 'antd-mobile';

export default () => 
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
    <ActivityIndicator text="加载中..." animating={true} size='large' toast={true} />
</div>