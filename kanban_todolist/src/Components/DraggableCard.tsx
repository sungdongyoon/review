import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';


const Card = styled.div<{isDragging: boolean}>`
  padding: 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.isDragging ? "#74b9ff" : props.theme.cardColor};
  box-shadow: ${(props) => props.isDragging ? "0 5px 5px rgba(0, 0, 0, 0.5)" : "none"};
  border-radius: 5px;
`;

interface IDraggableCardProps {
  toDoId: number;
  toDoText: string;
  idx: number;
}

const DraggableCard = ({toDoId, toDoText, idx}: IDraggableCardProps) => {
  return (
    <Draggable key={toDoId} draggableId={toDoId+""} index={idx}>
      {(magic, snapshot) => (
        <Card isDragging={snapshot.isDragging} ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
          {toDoText}
        </Card>
      )}
    </Draggable>
  )
}

export default React.memo(DraggableCard);
