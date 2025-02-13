import React, { useState } from "react";
import { Table, Avatar, Modal } from "antd";

const UserTable = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const columns = [
        {
            title: "S.no",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "User",
            dataIndex: "user",
            key: "user",
            render: (text, record) => (
                <div className="flex items-center space-x-2">
                    <Avatar src={record.avatar} />
                    <span>{text}</span>
                </div>
            ),
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Contact",
            dataIndex: "contact",
            key: "contact",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
        },
    ];

    const data = [
        {
            id: "#1239",
            user: "Md. Mahmud",
            email: "mahmud@gmail.com",
            contact: "+099999",
            location: "Paris",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            address: "78/4 R no. 60/1 Rue des Saints-Paris, 75005 Paris",
            dob: "17 Dec, 2024",
            gender: "Male",
        },
        {
            id: "#1238",
            user: "Lily Adams",
            email: "lilyadams@gmail.com",
            contact: "+123456789",
            location: "New York",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            address: "42nd Street, Manhattan, NY 10036",
            dob: "20 Aug, 1995",
            gender: "Female",
        },
    ];

    const handleRowClick = (record) => {
        setSelectedUser(record);
        setIsModalVisible(true);
    };

    return (
    <div className="w-5/6 mx-auto mt-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">All User Details</h2>
            <Table
                columns={columns}
                dataSource={data}
                rowKey="id"
                pagination={{ pageSize: 5 }}
                onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                })}
                className="cursor-pointer"
            />

            {/* Modal for user details */}
            <Modal
                title={
                    <div className="text-center">
                        <Avatar size={80} src={selectedUser?.avatar} />
                        <h3 className="font-semibold mt-2">{selectedUser?.user}</h3>
                    </div>
                }
                open={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
            >
                {selectedUser && (
                    <div className="p-4">
                        <p>
                            <strong>Name:</strong> {selectedUser.user}
                        </p>
                        <p>
                            <strong>Email:</strong> {selectedUser.email}
                        </p>
                        <p>
                            <strong>Address:</strong> {selectedUser.address}
                        </p>
                        <p>
                            <strong>Contact No:</strong> {selectedUser.contact}
                        </p>
                        <p>
                            <strong>Date of Birth:</strong> {selectedUser.dob}
                        </p>
                        <p>
                            <strong>Gender:</strong> {selectedUser.gender}
                        </p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default UserTable;
