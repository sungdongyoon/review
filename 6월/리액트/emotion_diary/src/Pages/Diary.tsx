import {useParams, useSearchParams, useNavigate} from "react-router-dom";
import useDiary from "../Hooks/useDiary";
import Button from "../Component/Button";
import Header from "../Component/Header";
import Viewer from "../Component/Viewer";
import { getFormattedDate } from "../Component/Util";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  }

  if(!data) {
    return<div>아직 일기를 불러오고 있습니다</div>
  } else {
    const {date, emotionId, content} = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
    return (
      <div className="Diary">
        <Header
          title={title}
          leftChild={<Button onClick={goBack} text={"< 뒤로가기"}/>}
          rightChild={<Button onClick={goEdit} text={"수정하기 >"}/>}
        />
        <Viewer content={content} emotionId={emotionId}/>
      </div>
    )
  }
}

export default Diary;