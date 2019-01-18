import React from 'react';
import { Form, Textarea } from "../Form";

const AddComment = ({}) => (
  <Form
    action="https://github.mybit.io/api/createComment"
    method="post"
  >
    <Textarea
      hasLabel='false'
      htmlFor='addComment'
      name='comment'
      required={true}
      rows={5}
      placeholder='Add comment (This comment will be posted to the corresponding github issue page)'
    />
  </Form>
);

export default AddComment;
