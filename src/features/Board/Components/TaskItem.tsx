import { useRef } from "react";
import { useDrag } from "react-dnd";

type Props = {
  plan: String;
  handleOpenModal: () => void
}
export const TaskItem = ({ handleOpenModal, plan }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'BOX',
    item: {plan},
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  dragRef(ref)
  return (
    <button onClick={handleOpenModal} ref={ref}>
      {plan}
    </button>
  );
}