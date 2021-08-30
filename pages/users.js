import React, { useEffect } from "react";
import Dashbords from "../containers/Dashbords";
import { usersAxiops } from "../Api/usersApi";
import { useSelector, useDispatch } from "react-redux";

const users = () => {
  const state = useSelector((state) => state.UsersRedux.post);
  const dispatch = useDispatch();
  useEffect(async () => {
    const res = await usersAxiops();
    const action = { type: "USERS_ARRAY", payload: res.data };
    dispatch(action);
  }, []);
  return (
    <div>
      <Dashbords>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>N</th>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>phone</th>
              <th>website</th>
            </tr>
          </thead>
          <tbody>
            {state?.map((e, i) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.username}</td>
                <td>{e.email}</td>
                <td>{e.phone}</td>
                <td>{e.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Dashbords>
    </div>
  );
};

export default users;
