import { useEffect, useState } from "react";
import { Card } from "./Components/Card";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
type Props = {

}
export const Board = ({ }: Props) => {
  const [data, setData] = useState([
    { title: "To do", plans: ['Project planning1', 'Kickoff meeting1'], columnId: "1" },
    { title: "Doing", plans: ['Project planning2', 'Kickoff meeting2'], columnId: "2" },
    { title: "Doing", plans: ['Project planning3', 'Kickoff meeting3'], columnId: "3" },
    { title: "Doing", plans: ['Project planning4', 'Kickoff meeting4'], columnId: "4" },
    { title: "Doing", plans: ['Project planning5', 'Kickoff meeting5'], columnId: "5" },
  ])
  const handleDrop = (item: string, targetColumnId: string) => {
    setData(prev =>
      prev.map(col => {
        if (col.columnId === targetColumnId) {
          return { ...col, plans: [...col.plans, item] };
        }
        if (col.plans.includes(item)) {
          return { ...col, plans: col.plans.filter(t => t !== item) };
        }
        return col;
      })
    );
  }
  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <DndProvider backend={HTML5Backend}>
      <ul className="list-plan">
        {
          data && data.length > 0 && data.map(item => {
            return <li key={item.columnId}><Card onDrop={handleDrop} title={item.title} plans={item.plans} id={item.columnId} /></li>
          })
        }
      </ul>
    </DndProvider>

  );
}