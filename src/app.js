/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("excuse");
};

let generateExcuse = () => {
  let subject = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let object = ["my homework", "the keys", "the car"];
  let time = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let subjects = Math.floor(Math.random() * subject.length);
  let actions = Math.floor(Math.random() * action.length);
  let objects = Math.floor(Math.random() * object.length);
  let times = Math.floor(Math.random() * time.length);

  return (
    who[subjects] +
    " " +
    action[actions] +
    " " +
    what[objects] +
    " " +
    when[times]
  );
};
