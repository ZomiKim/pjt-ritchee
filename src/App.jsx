import Button from "./componetns/Button";
import Nav from "./componetns/Nav";

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="bg-main-01"></div>
      <div className="bg-main-02">컬러</div>
      <div className="bg-light-01">컬러</div>
      <div className="bg-light-02">컬러</div>
      <div className="bg-deep text-white">컬러</div>
      <div className="bg-white text-black">컬러</div>
      <div className="bg-black text-white">컬러</div>
      <div className="bg-point text-white">컬러</div>
      <div className="bg-gray-deep text-white">컬러</div>
      <div className="bg-gray-mid text-white">컬러</div>
      <div className="bg-gray-light text-black">컬러</div>

      <h1>계절이 지나가는 하늘에는</h1>
      <h2>계절이 지나가는 하늘에는</h2>
      <h3>계절이 지나가는 하늘에는</h3>
      <h4>계절이 지나가는 하늘에는</h4>
      <span>계절이 지나가는 하늘에는</span>
      <p>계절이 지나가는 하늘에는</p>
      <a>계절이 지나가는 하늘에는</a>
      <span className="dummy block">계절이 지나가는 하늘에는</span>

      <div className="w-[50%] flex flex-col flex-wrap">
        <Button size="long" variant="primary">
          long
        </Button>

        <Button size="mid" variant="line">
          mid
        </Button>

        <Button size="short" variant="point">
          short
        </Button>
      </div>
    </>
  );
}

export default App;
