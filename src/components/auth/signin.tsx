import React from 'react';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router';

import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { FormProps } from './signup';
import { actionCreators, AuthReducerState } from '../../app_state';
const { signin } = actionCreators;

export interface SigninProps extends RouterProps {
 signin: (emailPassword: FormProps, cb: () => void) => Promise<void>;
 errorMessage?: string;  
};

class Signin extends React.Component<InjectedFormProps<FormProps, SigninProps> & SigninProps> {

  onSubmit = (formProps: FormProps) => {
    this.props.signin(formProps, () => {
      this.props.history.push('/feature');
    });
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
        <div>{ this.props.errorMessage }</div>
        <button type="submit">Sign In!</button>
      </form>
    );
  }
};

const mapStateToProps = ({ auth }: { auth: AuthReducerState }) => {
  return { errorMessage: auth.errorMessage };
}

export default connect(mapStateToProps, { signin })(
  reduxForm<FormProps, SigninProps>({
    form: 'signinForm' 
  })(Signin)
);
