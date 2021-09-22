import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Button } from "antd";
const columns = [
  {
    title: "Id",
    dataIndex: "Id",
    width: 100,
  },
  {
    title: "Slot1",
    dataIndex: "Slot1",
    width: 100,
  },
  {
    title: "Slot2",
    dataIndex: "Slot2",
    width: 100,
  },
  {
    title: "Slot3",
    dataIndex: "Slot3",
    width: 100,
  },
  {
    title: "balance",
    dataIndex: "balance",
    width: 100,
  },
  {
    title: "time",
    dataIndex: "time",
    width: 100,
  },
];

const data = JSON.parse(localStorage.getItem("tableData"))
  ? JSON.parse(localStorage.getItem("tableData"))
  : [{}];

for (let i = 0; i < data.length; i++) {
  data.push({
    Id: i + 1,
    Slot1: data[i].slot1,
    Slot2: data[i].slot2,
    Slot3: data[i].slot3,
    balance: data[i].balance,
    time: data[i].time,
  });
}

function Tables() {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
      scroll={{ y: 240 }}
    />
  );
}

export default Tables;
