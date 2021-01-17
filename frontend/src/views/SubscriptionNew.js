import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import { Container } from "react-bootstrap";

import Loading from "../components/Loading";

const SubscriptionNew = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return <Container>New Subscription</Container>;
};

export default withAuthenticationRequired(SubscriptionNew, {
  onRedirecting: () => <Loading />,
});
