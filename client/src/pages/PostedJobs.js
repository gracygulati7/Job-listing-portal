import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { Row, Col, Form, Tabs, Input, Button, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { postJob } from '../redux/actions/jobActions';
import './PostJob.css'; // Import the CSS file for styling

const { TextArea } = Input;
const { TabPane } = Tabs;
const { Option } = Select;

function PostJob() {
	const [jobInfo, setJobInfo] = useState({});
	const [activeTab, setActiveTab] = useState('0');
	const dispatch = useDispatch();

	function onFirstFormFinish(values) {
		setJobInfo(values);
		setActiveTab('1');
	}

	function onFinalFormFinish(values) {
		const finalObj = { ...jobInfo, ...values };
		dispatch(postJob(finalObj));
	}

	return (
		<div className="post-job-container">
			<DefaultLayout>
				<Tabs
					defaultActiveKey="0"
					activeKey={activeTab}
					onChange={setActiveTab}
					className="custom-tabs"
				>
					<TabPane tab="Job Info" key="0">
						<Form layout="vertical" onFinish={onFirstFormFinish}>
							<Row gutter={16}>
								<Col lg={8} sm={24}>
									<Form.Item
										name="title"
										rules={[{ required: true }]}
										label="Title"
									>
										<Input />
									</Form.Item>
								</Col>

								<Col lg={8} sm={24}>
									<Form.Item
										name="department"
										rules={[{ required: true }]}
										label="Department"
									>
										<Input />
									</Form.Item>
								</Col>

								<Col lg={8} sm={24}>
									<Form.Item
										name="experience"
										rules={[{ required: true }]}
										label="Experience"
									>
										<Input />
									</Form.Item>
								</Col>

								<Col lg={8} sm={24}>
									<Form.Item
										name="salaryFrom"
										rules={[{ required: true }]}
										label="Salary From"
									>
										<Input type="number" />
									</Form.Item>
								</Col>

								<Col lg={8} sm={24}>
									<Form.Item
										name="salaryTo"
										rules={[{ required: true }]}
										label="Salary To"
									>
										<Input type="number" />
									</Form.Item>
								</Col>
							</Row>

							<Row gutter={16}>
								<Col lg={8} sm={24}>
									<Form.Item
										name="skillsRequired"
										rules={[{ required: true }]}
										label="Skills"
									>
										<Input />
									</Form.Item>
								</Col>

								<Col lg={8} sm={24}>
									<Form.Item
										name="minimumQualification"
										rules={[{ required: true }]}
										label="Minimum Qualification"
									>
										<Select>
											<Option value="Degree">
												Degree
											</Option>
											<Option value="Plus 2">
												Plus 2
											</Option>
											<Option value="10th">10th</Option>
										</Select>
									</Form.Item>
								</Col>

								<Col lg={24} sm={24}>
									<Form.Item
										name="smallDescription"
										rules={[{ required: true }]}
										label="Small Description"
									>
										<TextArea rows={3} />
									</Form.Item>
								</Col>

								<Col lg={24} sm={24}>
									<Form.Item
										name="fullDescription"
										rules={[{ required: true }]}
										label="Full Description"
									>
										<TextArea rows={6} />
									</Form.Item>
								</Col>
							</Row>

							<div className="button-group">
								<Button
									type="primary"
									htmlType="submit"
									className="next-button"
								>
									Next
								</Button>
							</div>
						</Form>
					</TabPane>
					<TabPane tab="Company Info" key="1">
						<Form layout="vertical" onFinish={onFinalFormFinish}>
							<Row gutter={16}>
								<Col lg={8} sm={24}>
									<Form.Item
										name="company"
										label="Company Name"
										rules={[{ required: true }]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col lg={8} sm={24}>
									<Form.Item
										name="email"
										label="Company Email"
										rules={[{ required: true }]}
									>
										<Input />
									</Form.Item>
								</Col>

								<Col lg={8} sm={24}>
									<Form.Item
										name="phoneNumber"
										label="Phone Number"
										rules={[{ required: true }]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col lg={24} sm={24}>
									<Form.Item
										name="companyDescription"
										label="Company Description"
										rules={[{ required: true }]}
									>
										<TextArea rows={3} />
									</Form.Item>
								</Col>
							</Row>
							<div className="button-group">
								<Button
									onClick={() => {
										setActiveTab('0');
									}}
									className="previous-button"
								>
									Previous
								</Button>
								<Button
									type="primary"
									htmlType="submit"
									className="post-button"
								>
									Post Job
								</Button>
							</div>
						</Form>
					</TabPane>
				</Tabs>
			</DefaultLayout>
		</div>
	);
}

export default PostJob;
