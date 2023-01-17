import { useSelector } from "react-redux";
import { useRouter } from "next/router";


const withAuth = Component => {
  const Auth = (props) => {
    const router = useRouter();
    const token = useSelector((state) => state.token);

    if (!token) {
     router.push("/login");
    }
    return (
      <Component {...props} />
    );
  };
  
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;