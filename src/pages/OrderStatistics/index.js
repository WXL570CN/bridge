import { Table } from 'antd';
import styles from './index.less';
import ProTable from '@ant-design/pro-table';
import { useState } from 'react';
import PageContainer from '../../components/PageContainer';

const OrderStatistics = (props) => {
  const [list, setList] = useState([
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
      updateTime: '2024-12-22',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
      updateTime: '2024-12-22',
    },
  ]);

  const getList = (params) => {
    console.log('『params』', params);
    return list;
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
  ];

  return (
    <PageContainer>
      <div className={styles['page-content']}>
        <ProTable
          cardProps={{ title: <span className="b">订单统计列表</span> }}
          columns={columns}
          options={false}
          dataSource={list}
          request={getList}
        />
      </div>
    </PageContainer>
  );
};

export default OrderStatistics;
