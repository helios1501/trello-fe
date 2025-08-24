import { useDispatch } from "react-redux";
import { openBoard } from "../dashboardSlice";

type Props = {

}
export const WorkSpaces = ({ }: Props) => {
  const dispatch = useDispatch();
  const handleOpenBoard = () => {
    dispatch(openBoard(true))
  }
  return (
    <div className="wrap-workspaces">
      <p className="ttl">YOURWORKSPACES</p>
      <ul className="list-card">
        <li>
          <button className="wrap-card" onClick={handleOpenBoard}>My Trello board</button>
        </li>
        <li>
          <button className="wrap-card new">+  Create a new board</button>
        </li>
      </ul>
    </div>
  );
}