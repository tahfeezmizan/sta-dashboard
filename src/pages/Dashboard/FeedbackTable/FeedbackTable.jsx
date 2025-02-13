import React, { useState } from "react";
import { Table, Avatar, Space, Modal } from "antd";
import { StarFilled, ArrowRightOutlined } from "@ant-design/icons";

const FeedbackTable = () => {
    const [visible, setVisible] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState(null);

    const columns = [
        {
            title: "S.ID",
            dataIndex: "id",
            key: "id",
            render: (id) => `#${id}`,
        },
        {
            title: "User",
            dataIndex: "user",
            key: "user",
            render: ({ name, avatar }) => (
                <Space onClick={() => handleRowClick(name)} className="cursor-pointer">
                    <Avatar src={avatar} />
                    <span className="font-semibold">{name}</span>
                </Space>
            ),
        },
        {
            title: "Provider",
            dataIndex: "provider",
            key: "provider",
            render: ({ name, avatar }) => (
                <Space onClick={() => handleRowClick(name)} className="cursor-pointer">
                    <span className="font-semibold">{name}</span>
                </Space>
            ),
        },
        {
            title: "Review",
            dataIndex: "review",
            key: "review",
            render: (review) => (
                <Space>
                    <StarFilled style={{ color: "red" }} />
                    <span>{review}/5</span>
                </Space>
            ),
        },
        {
            title: "Action",
            key: "action",
            render: () => <ArrowRightOutlined style={{ color: "blue" }} />,
        },
    ];

    const data = [
        {
            key: "1",
            id: "1239",
            user: {
                name: "Mr. Mahmud",
                avatar: "https://randomuser.me/api/portraits/men/1.jpg",
                email: "mahmud@gmail.com",
                address: "76/4 R no. 60/1 Rue des Saints-Paris, 75005 Paris",
                phone: "+099999",
            },
            provider: {
                name: "Mr. Jone",
                avatar: "https://randomuser.me/api/portraits/men/2.jpg",
                email: "jone@gmail.com",
                address: "15 Rue des Saints-Paris, 75006 Paris",
                phone: "+092578",
            },
            review: 4.5,
            comment: "Dui at tortor. nisi vitae Nullam adipiscing malesuada faucibus sit lacus orci Nam ac convallis."
        },
        {
            key: "1",
            id: "1239",
            user: {
                name: "Basar",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKddLtVjZ-PtpofGgkLxpbHrqFbAkVAIagPQ&s",
                email: "basar@gmail.com",
                address: "76/4 R no. 60/1 Rue des Saints-Paris, 75005 Paris",
                phone: "+099999",
            },
            provider: {
                name: "Mr. Dibala ",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAhWFq7-37o5SrtEVZxPma4W2OcJPcpihIvQ&s",
                email: "mrdibala@gmail.com",
                address: "15 Rue des Saints-Paris, 75006 Paris",
                phone: "+092578",
            },
            review: 4.5,
            comment: "Dui at tortor. nisi vitae Nullam adipiscing malesuada faucibus sit lacus orci Nam ac convallis."
        },
        {
            key: "1",
            id: "1239",
            user: {
                name: "Mr. Mahmud",
                avatar: "https://randomuser.me/api/portraits/men/1.jpg",
                email: "mahmud@gmail.com",
                address: "76/4 R no. 60/1 Rue des Saints-Paris, 75005 Paris",
                phone: "+099999",
            },
            provider: {
                name: "Mr. Jone",
                avatar: "https://randomuser.me/api/portraits/men/2.jpg",
                email: "jone@gmail.com",
                address: "15 Rue des Saints-Paris, 75006 Paris",
                phone: "+092578",
            },
            review: 4.5,
            comment: "Dui at tortor. nisi vitae Nullam adipiscing malesuada faucibus sit lacus orci Nam ac convallis."
        },
    ];

    const handleRowClick = (name) => {
        const feedback = data.find((item) => item.user.name === name);
        setSelectedFeedback(feedback);
        setVisible(true);
    };

    return (
        <div className="p-4">
            <Table columns={columns} dataSource={data} pagination={false} />

            {/* Modal for Feedback Details */}
            <Modal
                visible={visible}
                onCancel={() => setVisible(false)}
                footer={null}
                width={600}
                className="rounded-lg"
            >
                {selectedFeedback && (
                    <div className="2">
                        <h2 className="text-pink-500 font-semibold text-lg">Feedback Details</h2>
                        <div className="flex justify-between items-center gap-6 mt-4 border-b pb-4">
                            {/* User Info */}
                            <div className="flex-1">
                                <h2 className=" font-medium mb-2">User</h2>
                                <div className="flex gap-3">
                                    <Avatar size={64} className="rounded-full" src={selectedFeedback.user.avatar} />
                                    <div className="">
                                        <h3 className="text-pink-500 font-semibold mt-2">{selectedFeedback.user.name}</h3>
                                        <p className="text-gray-500 text-sm">{selectedFeedback.user.email}</p>
                                        <p className="text-gray-500 text-sm">{selectedFeedback.user.address}</p>
                                        <p className="text-gray-500 text-sm">{selectedFeedback.user.phone}</p>
                                    </div>
                                </div>
                            </div>
                            {/* Provider Info */}
                            <div className="flex-1">
                                <h2 className=" font-medium mb-2">Provider</h2>
                                <div className="flex gap-3">
                                    <Avatar size={64} className="rounded-full" src={selectedFeedback.provider.avatar} />
                                    <div className="">
                                        <h3 className="text-pink-500 font-semibold mt-2">{selectedFeedback.provider.name}</h3>
                                        <p className="text-gray-500 text-sm">{selectedFeedback.provider.email}</p>
                                        <p className="text-gray-500 text-sm">{selectedFeedback.provider.address}</p>
                                        <p className="text-gray-500 text-sm">{selectedFeedback.provider.phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Rating and Comment */}
                        <div className="mt-4">
                            <p className="text-lg">
                                <span className="font-semibold">Rating</span> :
                                <StarFilled className="text-red-500 mx-2" />
                                <span className="text-lg font-semibold">{selectedFeedback.review}/5</span>
                            </p>
                            <p className="mt-2">
                                <span className="font-semibold">Comment</span> : {selectedFeedback.comment}
                            </p>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default FeedbackTable;
