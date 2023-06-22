import "./EmotionItem.css";
import { emotionList } from "./Util";

const EmotionItem = ({id, img, name, onClick, isSelected}: any) => {
  const handleOnClick = () => {
    onClick(id);
  }
  return (
    <div className={["EmotionItem",
    isSelected ? `EmotionItem_on_${id}` : `EmotionItem_off`].join(" ")}
    onClick={handleOnClick}>
      <img src={img} alt={`emotion${id}`} />
      <span>{name}</span>
    </div>
  )
}

export default EmotionItem;