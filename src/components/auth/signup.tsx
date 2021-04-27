import { Component } from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

export interface FormProps {
  email: string;
  password: string;
}

class Signup extends Component<InjectedFormProps<FormProps>> {

  onSubmit = (formProps: FormProps) => {
    console.log(formProps)
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name="email" type="text" component="input" autoComplete="none" />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name="password" type="password" component="input" autoComplete="none" />
        </fieldset>
        <button type="submit">Sign up!</button>
      </form>
    );
  }
}

export default reduxForm<FormProps>({ 
  form: 'signupForm'
})(Signup);