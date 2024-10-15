import ToDo from "../assets/icons_FEtask/To-do.svg";
import ThreeDotMenu from "../assets/icons_FEtask/3 dot menu.svg";
import BackLog from "../assets/icons_FEtask/Backlog.svg";
import Done from "../assets/icons_FEtask/Done.svg";
import Cancelled from "../assets/icons_FEtask/Cancelled.svg";
import UrgentPriorityColor from "../assets/icons_FEtask/SVG - Urgent Priority colour.svg";
import UrgentPriorityGrey from "../assets/icons_FEtask/SVG - Urgent Priority grey.svg";
import HighPriority from "../assets/icons_FEtask/Img - High Priority.svg";
import MediumPriority from "../assets/icons_FEtask/Img - Medium Priority.svg";
import LowPriority from "../assets/icons_FEtask/Img - Low Priority.svg";

export const getPriorityIcon = (priority: string) => {
  switch (priority) {
    case "No priority":
      return <img src={ThreeDotMenu} />;
    case "Low":
      return <img src={LowPriority} />;
    case "Medium":
      return <img src={MediumPriority} />;
    case "High":
      return <img src={HighPriority} />;
    case "Urgent":
      return <img src={UrgentPriorityColor} />;
    default:
      return <img src={UrgentPriorityGrey} />;
  }
};

export const getStatusIcon = (priority: string) => {
  switch (priority) {
    case "Backlog":
      return <img src={ToDo} />;
    case "Todo":
      return <img src={ToDo} />;
    case "In progress":
      return <img src={BackLog} />;
    case "Done":
      return <img src={Done} />;
    case "Canceled":
      return <img src={Cancelled} />;
    default:
      return <img src={Cancelled} />;
  }
};
