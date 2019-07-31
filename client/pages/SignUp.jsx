import React from 'react';

import SiteLayout from '../layouts/SiteLayout';

class SignUp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <SiteLayout>
        <h1>This is simple form to test apis.</h1>
        <div className="field">
          <label className="label">Full Name</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">UserName</label>
          <div className="control">
            <input className="input" type="text" />
          </div>
        </div>

        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" />
          </div>
        </div>

        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input className="input" type="password" />
          </div>
        </div>

        <div className="field">
          <label className="label">Re-type Password</label>
          <div className="control">
            <input className="input" type="password" />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
        </div>
      </SiteLayout>
    );
  }
}

export default SignUp;
