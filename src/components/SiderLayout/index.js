import React, { PureComponent } from 'react';
import router from 'umi/router';
import { Layout, Icon, Popover, Avatar } from 'antd';
import classNames from 'classnames';
import Link from 'umi/link';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import Debounce from 'lodash-decorators/debounce';
import NoticeIcon from '../NoticeIcon';
import styles from './index.less';
import { title } from '../../defaultSettings';
import RightContent from '../GlobalHeader/RightContent';

const { Sider } = Layout;

let firstMount = true;

export default class SiderMenu extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        firstMount = false;
    }

    componentWillUnmount() {
      this.triggerResizeEvent.cancel();
    }
    /* eslint-disable*/
    @Debounce(600)
    triggerResizeEvent() {
      // eslint-disable-line
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', true, false);
      window.dispatchEvent(event);
    }
    toggle = () => {
      const { collapsed, onCollapse } = this.props;
      onCollapse(!collapsed);
      this.triggerResizeEvent();
    };
    hideMenu=()=>{
      this.props.hideMenu();

    }
    logout=()=>{
      router.push({pathname:'/user/login'});
    }
    render() {
        const { 
          logo, 
          collapsed,
           onCollapse, 
           fixSiderbar, 
           theme, 
           isMobile, 
           currentUser,
           fetchingNotices,
           } = this.props;
      console.log(currentUser);
        const siderClassName = classNames(styles.sider, {
            [styles.fixSiderBar]: fixSiderbar,
            [styles.light]: theme === 'light',
        });
        const content = (
          <div>
            <p>姓名：yaojun</p>
          </div>
        );
        return (
          <Sider
            className={styles.sider}
            width={48}
          >
            <div>
              <Popover
                title="用户信息"
                trigger="hover"
                content={content}
                className={styles.trigger}
                placement="right"
              >
                <Avatar size="large" icon="user" />
              </Popover>
            </div>
            <span className={styles.trigger} onClick={this.hideMenu}>
              <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
            </span>
           {/* <div>
            <NoticeIcon
            className={styles.button}
            count={10}
            onItemClick={(item, tabProps) => {
              console.log(item, tabProps); // eslint-disable-line
              this.changeReadState(item, tabProps);
            }}
            locale={{
              emptyText: formatMessage({ id: 'component.noticeIcon.empty' }),
              clear: formatMessage({ id: 'component.noticeIcon.clear' }),
              viewMore: formatMessage({ id: 'component.noticeIcon.view-more' }),
              notification: formatMessage({ id: 'component.globalHeader.notification' }),
              message: formatMessage({ id: 'component.globalHeader.message' }),
              event: formatMessage({ id: 'component.globalHeader.event' }),
            }}
            // onClear={onNoticeClear}
            // onPopupVisibleChange={onNoticeVisibleChange}
            onViewMore={() => message.info('Click on view more')}
            clearClose
          >
            <NoticeIcon.Tab
              count={unreadMsg.notification}
              list={noticeData.notification}
              title="notification"
              emptyText={formatMessage({ id: 'component.globalHeader.notification.empty' })}
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
              showViewMore
            />
            <NoticeIcon.Tab
              count={unreadMsg.message}
              list={noticeData.message}
              title="message"
              emptyText={formatMessage({ id: 'component.globalHeader.message.empty' })}
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
              showViewMore
            />
            <NoticeIcon.Tab
              count={unreadMsg.event}
              list={noticeData.event}
              title="event"
              emptyText={formatMessage({ id: 'component.globalHeader.event.empty' })}
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
              showViewMore
            />
          </NoticeIcon>
            </div>
          */}
            <div>
            <Icon type="logout" onClick={this.logout}><FormattedMessage id="menu.account.logout" defaultMessage="logout" /></Icon>
            </div>
          </Sider>
        );
    }
}
