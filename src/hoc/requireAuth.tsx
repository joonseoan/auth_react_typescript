import { ComponentType, FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { RouterProps } from 'react-router';

import { AuthReducerState } from '../app_state';

interface WithRequireAuthProps extends RouterProps {
  auth: string;
};

const withRequireAuth = (ChildComponent: ComponentType<any>) => {
  
  const ComposedComponent: FC<WithRequireAuthProps> = (props) => {

    useEffect(() => {
      if (!props.auth) {
        props.history.push('/');
      }
    }, [props.auth, props.history]);

    return (
      <ChildComponent {...props} />
    )
  }

  function mapStateToProps({ auth }: { auth: AuthReducerState }) {
    return {
      auth: auth.authenticated 
    };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

export default withRequireAuth;

// const withRequireAuth = (ChildComponent: ComponentType<any>) => {
//   class ComposedComponent extends Component<WithRequireAuthProps> {
    
//     // Our component just got rendered
//     componentDidMount() {
//       this.shouldNavigateAway();
//     }
    
//     // Our component just got updated
//     componentDidUpdate() {
//       this.shouldNavigateAway();
//     }

//     shouldNavigateAway() {
//       if (!this.props.auth) {
//         this.props.history.push('/');
//       }
//     }
//     render() {
//       return <ChildComponent {...this.props} />;
//     }
//   }

//   function mapStateToProps({ auth }: { auth: AuthReducerState }) {
//     return {
//       auth: auth.authenticated 
//     };
//   }

//   return connect(mapStateToProps)(ComposedComponent);
// };

// const withRequireAuth = (ChildComponent: ComponentType<any>) => {
  
//   const ComposedComponent: FC<WithRequireAuthProps> = (props) => {

//     useEffect(() => {
//       if (props.auth) {
//         props.history.push('/');
//       }
//     }, [props.auth, props.history]);

//     return (
//       <ChildComponent {...props} />
//     )
//   }

//   function mapStateToProps({ auth }: { auth: AuthReducerState }) {
//     return {
//       auth: auth.authenticated 
//     };
//   }

//   return connect(mapStateToProps)(ComposedComponent);
// };

// export default withRequireAuth;













// const withRequireAuth = <P extends WithRequireAuthProps>(ChildComponent: ComponentType<P>) => {
//   class ComposedComponent extends Component<WithRequireAuthProps, P> {



//   }

//   function mapStateToProps ({ auth }: { auth: AuthReducerState }) {
//     return {
//       auth: auth.authenticated,
//     }
//   }

//   return connect(mapStateToProps)(ComposedComponent)
// } 
//   (props: P & WithRequireAuthProps) => 
// {
//   console.log('props: ', props);
//   return (
//     <ChildComponent { ...props } />
//   )


// }


// const mapStateToProps = ({ auth }: { auth: AuthReducerState }) => {
//   return {
//     auth: auth.authenticated,
//   };
// };

// export default connect(mapStateToProps)(withRequireAuth);