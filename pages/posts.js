import React, { useEffect } from "react";
import Dashbords from "../containers/Dashbords";
import { postAxios } from "../Api/postsApi";
import { useSelector, useDispatch } from "react-redux";

const posts = () => {
  const state = useSelector((state) => state.PostsRedux.post);
  const dispatch = useDispatch();
  useEffect(async () => {
    const res = await postAxios();
    const action = { type: "POST_ARRAY", payload: res.data };
    dispatch(action);
  }, []);

  return (
    <div>
      <Dashbords>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>N</th>
              <th>title</th>
              <th>body</th>
            </tr>
          </thead>
          <tbody>
            {state?.map((e, i) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Dashbords>
    </div>
  );
};

export default posts;
