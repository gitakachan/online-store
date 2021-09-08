import mitt from "mitt";
const emitter = mitt();

export default function(response) {
  if (response.data.success) {
    emitter.emit("pushMessage", {
      style: "success",
      title: "更新成功",
    });
  } else {
    let msg = response.data.message;
    if (typeof msg === "string") {
      msg = [msg];
    }
    emitter.emit("pushMessage", {
      style: "danger",
      title: "更新失敗",
      content: msg.join("、"),
    });
  }
}
