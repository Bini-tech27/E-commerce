const dataSource = [
  {
    key: "1",
    no: 1,
    productName: "",
    quantity: 1,
  },
  {
    key: "2",
    no: 1,
    productName: "",
    quantity: 1,
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

<Table dataSource={dataSource} columns={columns} />;
