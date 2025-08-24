import { useState } from "react";
import { PlanDetail } from "./PlanDetail";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../boardSlice";

type Props = {
  title: string;
  plans: string[];
}
export const Card = ({ title, plans }: Props) => {
  const dispatch = useDispatch();
  const [listPlan, setListPlan] = useState<String[]>(plans)
  const [isOpenAdd, setIsOpenAdd] = useState<boolean>(false)
  const [dataInput, setDataInput] = useState<string>('')

  const isOpenBoard = useSelector((state: any) => state.board.isOpen)
  const handleAdd = () => {
    if (!dataInput) return
    setListPlan([...listPlan, dataInput])
    setDataInput('')
  }
  const handleOpenModal = () => {
    dispatch(setOpen(true))
  }
  return (
    <div className="plan">
      <p className="ttl">{title}</p>
      <ul className="list-task">
        {
          listPlan && listPlan.length > 0 && listPlan.map((plan, index) => {
            return <li key={index}>
              <button onClick={handleOpenModal}>
                {plan}
              </button>
            </li>
          })
        }
      </ul>
      {isOpenAdd
        ? <>
          <p className="wrap-input"><input type="text" value={dataInput} onChange={(e) => setDataInput(e.target.value.trim())} /></p>
          <div className="wrap-control">
            <button onClick={handleAdd}>Add a card</button>
            <button onClick={() => setIsOpenAdd(false)}>X</button>
          </div>
        </>
        : <div className="wrap-control">
          <button
            onClick={() => {
              setIsOpenAdd(!isOpenAdd)
            }}>
            + Add a card
          </button>
        </div>
      }
      {
        isOpenBoard && <PlanDetail title="Project Name" plan="To do" members={[]} />
      }
    </div>
  );
}