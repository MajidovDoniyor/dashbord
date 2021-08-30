import React, { useEffect } from "react";
import Dashbords from "../containers/Dashbords";
import { albumsAxios } from "../Api/albumsApi";
import { useSelector, useDispatch } from "react-redux";

const albums = () => {
  const state = useSelector((state) => state.AlbumRedux.post);
  const dispatch = useDispatch();
  useEffect(async () => {
    const res = await albumsAxios();
    const action = { type: "ALBUMS_ARRAY", payload: res.data };
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
            </tr>
          </thead>
          <tbody>
            {state?.map((e, i) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Dashbords>
    </div>
  );
};

export default albums;
