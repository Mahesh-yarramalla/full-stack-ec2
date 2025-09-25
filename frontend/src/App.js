import { useEffect, useState } from 'react';
function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://<EC2_PUBLIC_IP>:5000/api")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  return <div><h1>{message}</h1></div>;
}
export default App;
