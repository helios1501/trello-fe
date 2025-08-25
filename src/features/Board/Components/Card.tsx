import { useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../boardSlice";
import { PlanDetail } from "./PlanDetail";
import { TaskItem } from "./TaskItem";

type Props = {
  id: string;
  title: string;
  plans: string[];
  onDrop: (plan: string, id: string) => void
}
export const Card = ({ title, plans, id, onDrop }: Props) => {
  const ref = useRef<HTMLUListElement>(null);
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: 'BOX',
    drop: ({ plan }: { plan: string }) => {
      onDrop(plan, id);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));
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
  dropRef(ref)
  useEffect(() => {
    setListPlan(plans)
  }, [plans])
  return (
    <div className="plan">
      <p className="ttl">{title}</p>
      <ul className="list-task" ref={ref}>
        {
          listPlan && listPlan.length > 0 && listPlan.map((plan, index) => {
            return <li key={index}>
              <TaskItem handleOpenModal={handleOpenModal} plan={plan} />
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