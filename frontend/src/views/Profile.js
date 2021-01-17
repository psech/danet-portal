import React from "react";
import { Container, Row, Table, Image } from "react-bootstrap";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import Loading from "../components/Loading";

import config from "../auth_config.json";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const organizationObj = user[`https://${config.tenant}/organization`];
  console.log(organizationObj);
  const organization =
    Object.keys(organizationObj).length === 0 &&
    organizationObj.constructor === Object ? (
      <span style={{ color: "red" }}>None, please contact administrator</span>
    ) : (
      organizationObj
    );

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <Container>
        <Row className="my-5">
          <Image
            src={user.picture}
            alt={user.name}
            height={100}
            roundedCircle
          />
        </Row>
        <Row>
          <Table>
            <tbody>
              <tr>
                <td>
                  <strong>Name</strong>
                </td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Email</strong>
                </td>
                <td>{user.email}</td>
              </tr>
              <tr>
                <td>
                  <strong>Organization</strong>
                </td>
                <td>{organization}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    )
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
