import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ICompany from "../interfaces/ICompany";
import TableElement from "../components/TableElement";
import { useState } from "react";

export default function Table({ data }: { data: ICompany[] }) {
  const [tableData, setTableData] = useState(data);

  const reorder = (list: any, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  function handleDragEnd(result: any) {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newArrayOrder: ICompany[] = reorder(
      tableData,
      source.index,
      destination.index
    ) as ICompany[];
    setTableData(newArrayOrder);
  }

  if (!data) {
    return null;
  }

  return (
    <table className='border-collapse'>
      <thead>
        <tr className='h-10 bg-slate-300'>
          <th className='border'>Компания</th>
          <th className='border'>Страна</th>
          <th className='border'>Город</th>
          <th className='border'>Адрес</th>
          <th className='border'>Биржа</th>
        </tr>
      </thead>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={"table-body"}>
          {(provided) => (
            <tbody
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {tableData?.map((company: ICompany, index: number) => {
                return (
                  <TableElement
                    key={index}
                    company={company}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </tbody>
          )}
        </Droppable>
      </DragDropContext>
    </table>
  );
}
