import React, { Component, Fragment } from "react";

import AdminPage from "src/pages/AdminPage/index.js";
import FullHeaderFullFooterLayout from "src/components/FullHeaderFullFooterLayout";

class Admin extends Component {
  render() {
    return (
      <Fragment>
        <FullHeaderFullFooterLayout>
          <AdminPage />
        </FullHeaderFullFooterLayout>
      </Fragment>
    );
  }
}

export default Admin;
