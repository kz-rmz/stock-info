import ICompany from "../interfaces/ICompany";
import { Draggable } from "react-beautiful-dnd";

export default function TableElement({
  company,
  index,
}: {
  company: ICompany;
  index: number;
}) {
  return (
    <Draggable
      draggableId={company.key}
      key={company.key}
      index={index}
    >
      {(provided) => (
        <tr
          className='border'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <td className='border md:px-2 md:py-1'>{company.companyName}</td>
          <td className='border md:px-2 md:py-1'>{company.country}</td>
          <td className='border md:px-2 md:py-1'>{company.city}</td>
          <td className='border md:px-2 md:py-1'>{company.address}</td>
          <td className='border md:px-2 md:py-1'>{company.exchange}</td>
        </tr>
      )}
    </Draggable>
  );
}
