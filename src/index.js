import "./style.css";
import { bindEventsMain } from "./domManipulation/eventBinding";
import { renderProject } from "./domManipulation/render";
import init from "./domManipulation/init";

init();
bindEventsMain();
renderProject();