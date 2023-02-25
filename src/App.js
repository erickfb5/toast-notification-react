import { useState } from "react";

import "./App.css";

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const types = ["info", "success", "error"];

const App = () => {
  const [toasts, setToasts] = useState([]);

  const createNotification = (message = null, type = null) => {
    const notif = {
      message: message ? message : getRandomMessage(),
      type: type ? type : getRandomType(),
    };

    setToasts([...toasts, notif]);

    setTimeout(() => {
      setToasts(toasts.filter((t) => t !== notif));
    }, 3000);
  };

  const getRandomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const getRandomType = () => types[Math.floor(Math.random() * types.length)];

  return (
    <div>
      <div id="toasts">
        {toasts.map((toast, index) => (
          <div key={index} className={`toast ${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>

      <button className="btn" onClick={() => createNotification()}>
        Show Notification
      </button>
    </div>
  );
};

export default App;
