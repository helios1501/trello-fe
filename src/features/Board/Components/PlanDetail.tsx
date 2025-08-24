import ImgTitle from 'assets/icon_title.png'
import ImgDesc from 'assets/icon_description.png'
import ImgActivity from 'assets/icon_activity.png'
import { useDispatch } from 'react-redux';
import { setOpen } from '../boardSlice';
type Props = {
  title: string;
  plan: string;
  members: string[];
}
export const PlanDetail = ({ }: Props) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setOpen(false))
    
  }
  return (
    <div className="modal">
      <div className="wrap-inner">
        <button className='btn-close' onClick={handleClose}>X</button>
        <p className="ttl">
          <img src={ImgTitle} alt="" />
          <span>Project name</span>
        </p>
        <p className="sub-ttl">in list To do</p>
        <div className="wrap-members">
          <label htmlFor="member">Members</label>
          <ul className="list-member">
            <li>Member01</li>
          </ul>
        </div>
        <div className="wrap-description">
          <label htmlFor="description">
            <img src={ImgDesc} alt="" />
            <span>Description</span>
          </label>
          <input type="text" id="description" placeholder='Add a more detailed description' />
        </div>
        <div className="wrap-activity">
          <div className='wrap-head-activity'>
            <label htmlFor="activity">
              <img src={ImgActivity} alt="" />
              <span>Activity</span>
            </label>
            <button>Show details</button>
          </div>
          <input type="text" id="activity" placeholder='Write a comment' />
        </div>
      </div>
    </div>
  );
}