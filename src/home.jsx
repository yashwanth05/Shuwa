import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/webcam");
  }

  return (
        <div>
            <h1>Hello</h1>
            <button onClick={handleClick} value = "click" />        </div>
  );
}
