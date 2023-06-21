import Button from "../Component/Button";
import Header from "../Component/Header";
import Editor from "../Component/Editor";

const Home = () => {
  return (
    <div>
      <Header
        title={"Home"}
        leftChild={
          <Button
            type="positive"
            text={"긍정버튼"}
            onClick={() => {
              alert("positive button")
            }}
          />
        }
        rightChild={
          <Button
            type="negative"
            text={"부정버튼"}
            onClick={() => {
              alert("negative button")
            }}
          />
        }
      />
      <Editor initData={console.log("hi")} onSubmit={() => alert("작성완료 버튼을 클릭했습니다")}/>
    </div>
  )
}

export default Home;