import React, { useState, useEffect, useCallback } from "react";
import { Container } from "react-bootstrap";
import { getEnv } from "../utils/env";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import Loading from "../components/Loading";

const SubscriptionNew = () => {
  const { isLoading, getAccessTokenSilently } = useAuth0();

  const [state, setState] = useState({
    showResult: false,
    apiMessage: "",
    error: null,
  });

  const callApi = useCallback(async () => {
    const token = await getAccessTokenSilently();

    return fetch(`${getEnv("REACT_APP_BASE_API_URL")}/external`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((data) => data.json());
  }, [getAccessTokenSilently]);

  useEffect(() => {
    let mounted = true;

    callApi()
      .then((responseData) => {
        if (mounted) {
          setState((state) => ({
            ...state,
            showResult: true,
            apiMessage: responseData,
          }));
        }
      })
      .catch((error) => {
        setState((state) => ({
          ...state,
          error: error.error,
        }));
      });

    return () => (mounted = false);
  }, [callApi]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <h3>New Subscription</h3>
      <p>REACT_APP_BASE_API_URL={getEnv("REACT_APP_BASE_API_URL")}</p>
      {state.showResult && (
        <code>{JSON.stringify(state.apiMessage, null, 2)}</code>
      )}
    </Container>
  );
};

export default withAuthenticationRequired(SubscriptionNew, {
  onRedirecting: () => <Loading />,
});
