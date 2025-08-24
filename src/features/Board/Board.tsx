import { Card } from "./Components/Card";

type Props = {

}
export const Board = ({ }: Props) => {
  return (
    <ul className="list-plan">
      <li><Card title="To do" plans={['Project planning', 'Kickoff meeting']} /></li>
      <li><Card title="Doing" plans={['Project planning', 'Kickoff meeting']} /></li>
      <li><Card title="Doing" plans={['Project planning', 'Kickoff meeting']} /></li>
      <li><Card title="Doing" plans={['Project planning', 'Kickoff meeting']} /></li>
      <li><Card title="Doing" plans={['Project planning', 'Kickoff meeting']} /></li>
    </ul>
  );
}