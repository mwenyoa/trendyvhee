import { toast } from "react-toastify";

const useMessage = (message: string, type: string) => {

  const messagesArray: string[] = message.split(", ");

  const msg = () => {
    return messagesArray.map(
      (msg: string, index: number) => `${index + 1}. ${msg }\t\n\n`
    );
  };

  if (type === "success") {
    return toast.success(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
    });
  } else if (type === "warning") {
    return toast.warning(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
    });
  } else if (type === "error") {
    return toast.error(msg, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      draggable: true,
    });
  }
};

const ShowAlert = (message: string, type: string) => useMessage(message, type);

export default ShowAlert;
