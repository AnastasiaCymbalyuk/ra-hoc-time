import React from "react";
import Video from "./Video";
import { nanoid } from "nanoid";

export default function VideoList(props) {
    return props.list.map(item => <Video url={item.url} key={nanoid()} date={item.date} />);
}