import React from "react";

const StyleBtn = {
  display: " flex",
  flexDirection: "column",
  margin: "40px 25px ",
};

export default function EditForm() {
  return (
    <div className="add_place none" id="autorized">
      <div className="place_form login_form">
        <i className="fa fa-times close_window" id="closeau" />
        <h3>
          Sign in
          <span />
        </h3>
        <form>
          <label>
            Email :
            <input type="text" style={{ margin: "15px 0" }} />
          </label>
          <label>
            Password:
            <input type="password" style={{ margin: "15px 0" }} />
          </label>

          <div style={StyleBtn}>
            <button
              type="submit"
              style={{ marginBottom: "15px" }}
              id="login"
              className=" btn btn-primary"
            >
              Login
            </button>

            <button className=" btn btn-primary reg_btn"> SignUp </button>
          </div>
        </form>
      </div>
    </div>
  );
}
