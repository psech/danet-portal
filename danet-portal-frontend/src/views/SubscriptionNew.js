import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import Loading from "../components/Loading";

const SubscriptionNew = () => {
  const {
    isLoading,
    getAccessTokenSilently,
    loginWithPopup,
    getAccessTokenWithPopup,
  } = useAuth0();

  const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });

  useEffect(() => {
    let mounted = true;

    callApi()
      .then((responseData) => {
        if (mounted) {
          setState({
            ...state,
            showResult: true,
            apiMessage: responseData,
          });
        }
      })
      .catch((error) => {
        setState({
          ...state,
          error: error.error,
        });
      });

    return () => (mounted = false);
  }, []);

  const callApi = async () => {
    const token = await getAccessTokenSilently();

    return fetch(`http://localhost:3000/dev/api/external`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => data.json());
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <h3>New Subscription</h3>
      {state.showResult && (
        <code>{JSON.stringify(state.apiMessage, null, 2)}</code>
      )}
    </Container>
  );
};

export default withAuthenticationRequired(SubscriptionNew, {
  onRedirecting: () => <Loading />,
});
