import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router';

import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { actionCreators, AuthReducerState } from '../../app_state';
const { signup } = actionCreators;
export interface FormProps {
  email: string;
  password: string;
}

export interface SignupProps extends RouterProps {
 signup: (emailPassword: FormProps, cb: () => void) => Promise<void>;
 errorMessage: string;  
};

class Signup extends React.Component<InjectedFormProps<FormProps, SignupProps> & SignupProps> {

  onSubmit = (formProps: FormProps) => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    console.log('this.props: ', this.props)

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
        <div>{ this.props.errorMessage }</div>
        <button type="submit">Sign up!</button>
      </form>
    );
  }
};

const mapStateToProps = ({ auth }: { auth: AuthReducerState }) => {
  if (auth.errorMessage) return { errorMessage: auth.errorMessage };
  return null;
}

export default connect(mapStateToProps, { signup })(
  reduxForm<FormProps, SignupProps>({
    form: 'signupForm' 
  })(Signup)
);
