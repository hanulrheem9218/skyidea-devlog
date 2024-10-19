import React from "react";
interface ViewContainerProps {
    children?: React.ReactNode[] | React.ReactNode;
}

const ViewContainer:React.FC<ViewContainerProps> = ({children}) => {
  return (
    <div className="view-container">{children}</div>
  )
}

export default ViewContainer;