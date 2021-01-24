import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import { Container } from "react-bootstrap";

import Loading from "../components/Loading";

const SubscriptionUpdate = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return <Container>Update Subscription</Container>;
};

export default withAuthenticationRequired(SubscriptionUpdate, {
  onRedirecting: () => <Loading />,
});
