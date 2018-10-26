import { Component } from 'react';
import { Collapse } from 'react-collapse';
import { Form, Input, Checkbox, Button } from 'antd';

const categories = [
  'Development',
  'Design',
  'Marketing'
]

const projects = [
  'DDF',
  'Go',
  'MYDAX',
  'SDK'
]

const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 10 }
}

class FormSubscribe extends Component {
  render () {
    const props = this.props

    return (
      <Collapse isOpened={props.isOpened}>
        <div className={props.className}>
          <p>Enter your email to receive notifications of new tasks.</p>
          <Form>
            <Form.Item {...formItemLayout} label="Email">
              <Input />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Category">
              <Checkbox.Group options={categories} />
            </Form.Item>
            <Form.Item {...formItemLayout} label="Project">
              <Checkbox.Group options={projects} />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Collapse>
    )
  }
}

export default FormSubscribe;
