import React, { useState } from "react";
import { Card, Row, Col, Table } from "antd";
import {
  DollarCircleOutlined,
  GiftOutlined,
  DollarOutlined,
} from "@ant-design/icons";

const Wallet = () => {
  const mpesaImageUrl =
    "https://codetribe.co.ke/wp-content/uploads/2020/12/MPESA-API-Integration-Services-kenya.jpg";
  const bankCardImageUrl =
    "https://www.victoriabank.co.ke/wp-content/uploads/2022/01/Platinum-card-resize.jpg";

  // Data for the account funds statement
  const accountStatementData = [
    {
      key: "1",
      type: "Withdraw",
      amount: "$10,00",
      date: "05/07/023",
      method: "Mpesa",
    },
    {
      key: "2",
      type: "Withdraw",
      amount: "$4,000",
      date: "04/08/023",
      method: "Bank",
    },
    {
      key: "3",
      type: "Withdraw",
      amount: "$1,200",
      date: "12/09/023",
      method: "Bank",
    },
    {
      key: "4",
      type: "Withdraw",
      amount: "Ksh 200,000",
      date: "12/10/023",
      method: "Mpesa",
    },
    {
      key: "5",
      type: "Balance",
      amount: "$200",
      date: "05/07/023",
      method: "",
    },
    {
      key: "6",
      type: "Balance",
      amount: "$1,234",
      date: "04/08/023",
      method: "",
    },
    {
      key: "7",
      type: "Balance",
      amount: "$2,400",
      date: "12/09/023",
      method: "",
    },
    {
      key: "8",
      type: "Balance",
      amount: "$4,000",
      date: "12/10/023",
      method: "",
    },
  ];

  const iconStyle = {
    fontSize: "48px",
    color: "#1890ff",
  };

  const contentStyle = {
    fontSize: "18px",
    fontWeight: "bold",
  };

  const paymentIconStyle = {
    fontSize: "24px",
    color: "#52c41a",
  };

  const paymentContentStyle = {
    fontSize: "14px",
    fontWeight: "bold",
  };

  const smallImageStyle = {
    width: "80px",
    cursor: "pointer",
  };

  const handleMpesaWithdraw = () => {
    const phoneNumber = window.prompt("Enter your phone number:");
    const amount = window.prompt("Enter the withdrawal amount:");
    if (phoneNumber !== null && amount !== null) {
      // User clicked OK on both prompts
      // You can perform further processing or make an API call here
      // For now, just show a success alert
      window.alert("Successful Withdraw");
    }
  };

  const handleBankCardTransfer = () => {
    const cardNumber = window.prompt("Enter your card number:");
    const transferAmount = window.prompt("Enter the transfer amount:");
    const password = window.prompt("Enter your password:");
    if (cardNumber !== null && transferAmount !== null && password !== null) {
      // User clicked OK on all prompts
      // Simulate a loading indicator for 5 seconds
      const loadingAlert = window.alert("Loading...");
      setTimeout(() => {
        // Close the loading alert after 5 seconds
        if (loadingAlert) {
          window.close();
        }
        // Show a success alert
        window.alert("Successful Transfer");
      }, 5000);
    }
  };

  const columns = [
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Method",
      dataIndex: "method",
      key: "method",
    },
  ];

  return (
    <Card title="Wallet" style={{ margin: 20 }}>
      <Row gutter={16}>
        <Col span={8}>
          <GiftOutlined style={iconStyle} />
          <div style={contentStyle}>
            <span>$ 4,000</span>
            <br />
            <span>KSH 400,000</span>
          </div>
        </Col>
        <Col span={16}>
          <Row gutter={16}>
            <Col span={12} className="payment-row">
              <DollarCircleOutlined style={paymentIconStyle} />
              <div style={paymentContentStyle}>
                <span>Content Payment</span>
                <br />
                <span>$ 1,200</span>
                <br />
                <span>KSH 124,000</span>
              </div>
            </Col>
            <Col span={12} className="withdraw-options">
              <div>
                <img
                  src={mpesaImageUrl}
                  alt="Mpesa"
                  style={smallImageStyle}
                  onClick={handleMpesaWithdraw}
                />
                <br />
                <span>Mpesa</span>
              </div>
              <div>
                <img
                  src={bankCardImageUrl}
                  alt="Bank Card"
                  style={smallImageStyle}
                  onClick={handleBankCardTransfer}
                />
                <br />
                <span>Bank Card</span>
              </div>
            </Col>
          </Row>
        
        </Col>
      </Row>
      <Card>
      <Row gutter={16}>
            <Col span={24}>
              <Table
                dataSource={accountStatementData}
                columns={columns}
                pagination={false}
              />
            </Col>
          </Row>
      </Card>
    </Card>
    
  );
};

export default Wallet;
