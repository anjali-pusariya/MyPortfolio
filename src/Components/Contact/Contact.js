import React from 'react';
import { Form, Input, Button } from 'antd';
import {
  MailOutlined,
  MobileOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import './Contact.css';
import AnjaliResume from './Files/Anjali.pdf'

const ContactForm = () => {
  const handleFinish = (values) => {
    const { name, email, message } = values;

    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=anjalipusariya25@gmail.com&su=${subject}&body=${body}`,
      '_blank'
    );
  };


  return (
    <div id="contact" className="ContactContainer">
      <h2>Contact Me</h2>

      <div className="ContactContent">
        {/* Left: Contact Form */}
        <div className="ContactLeft">
          <Form
            name="contact_form"
            layout="vertical"
            onFinish={handleFinish}
            className="ContactForm"
          >
            <Form.Item
              label="Your Name"
              name="name"
              rules={[
                { required: true, message: 'Please enter your name' },
                {
                  pattern: /^[A-Za-z\s]+$/,
                  message: 'Name should contain only letters and spaces',
                },
              ]}
            >
              <Input type="text" placeholder="Your Name" />
            </Form.Item>


            <Form.Item
              label="Your Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email address' },
              ]}
            >
              <Input type="email" placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              label="Your Message"
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <Input.TextArea rows={5} placeholder="Your Message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>

        {/* Right: Contact Info with Icons */}
        <div className="ContactRight">
          <p className="contact-item">
            <MailOutlined />
            <a href="mailto:anjalipusariya25@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Anjali,%0D%0AI%20saw%20your%20portfolio%20and...">
              anjalipusariya25@gmail.com
            </a>
          </p>

          <p className="contact-item">
            <MobileOutlined />
            <a href="tel:+918319303657">
              8319303657
            </a>
          </p>

          <p className="contact-item">
            <FileTextOutlined />
            <a href={AnjaliResume} target="_blank" rel="noopener noreferrer">
              Download Resume
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
