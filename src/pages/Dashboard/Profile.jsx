import React, { useState } from "react";
import { Tabs, Input, Button, Avatar } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import DashboardHeader from "./DashboardHeader/DashboardHeader";
const { TabPane } = Tabs;

export default function Profile() {
    const [name, setName] = useState("Maria");
    const [contact, setContact] = useState("+99007007007");

    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
            {/* Profile Header */}
            <div className="w-full max-w-2xl bg-pink-500 rounded-lg p-6 text-center relative">
                <div className="flex justify-center items-center gap-5">
                    <div className="relative">
                        <Avatar
                            size={80}
                            src="https://randomuser.me/api/portraits/women/1.jpg"
                            className="border-4 border-white"
                        />
                        <CameraOutlined className="absolute bottom-0 right-0 bg-white p-1 rounded-full text-pink-500 text-xl cursor-pointer" />
                    </div>
                    <div className="">
                        <h2 className="text-white text-xl font-semibold mt-2">Maria</h2>
                        <p className="text-white text-sm">Admin</p>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="w-full max-w-2xl mt-4">
                <Tabs defaultActiveKey="1" centered>
                    <TabPane tab={<span className="text-pink-500 font-semibold">Edit Profile</span>} key="1">
                        {/* Edit Profile Form */}
                        <div className="bg-white p-6 shadow rounded-lg mt-4">
                            <h3 className="text-lg font-semibold text-center mb-4">Edit Your Profile</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-medium">Name</label>
                                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label className="block font-medium">Contact no</label>
                                    <Input value={contact} onChange={(e) => setContact(e.target.value)} />
                                </div>
                                <Button type="primary" className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                                    Save & Change
                                </Button>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Change Password" key="2">
                        <p className="text-center text-gray-500">Change Password Section (Coming Soon)</p>
                    </TabPane>
                    <TabPane tab="User List" key="3">
                        <p className="text-center text-gray-500">User List Section (Coming Soon)</p>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    );
};
