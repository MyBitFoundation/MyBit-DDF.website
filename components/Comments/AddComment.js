import React from 'react';
import { Form, Textarea, StyledFieldSet } from "../Form";
import Button from "../Button"

const AddComment = ({styling, issueUrl}) => (
  <Form
    action=""
    method=""
  >
    <Textarea
      hasLabel='false'
      htmlFor='addComment'
      name='comment'
      required={true}
      rows={5}
      placeholder='Add comment (This comment will be posted to the corresponding github issue page)'
    />
    <StyledFieldSet>
      <Button
        styling={styling.primary.blue}
        size="large"
        href={issueUrl}
      >
        Submit Comment
      </Button>
    </StyledFieldSet>
  </Form>
);

export default AddComment;
