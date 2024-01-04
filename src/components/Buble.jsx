import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import Child from "./ChildComponent";
import "./bubble.css";

const Buble = (props) => {
  const options = {
		size: 180,
		minSize: 20,
		gutter: 6,
		provideProps: true,
		numCols: 5,
		fringeWidth: 160,
		yRadius: 120,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 9
	}
  const children = props.data.map((data, i) => {
      return <Child data={data} className="child" key={i}/>
  });
  return (<BubbleUI options={options} className="myBubbleUI">
		{children}
	</BubbleUI>)
}

export default Buble