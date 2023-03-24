/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import DateTimePretty from "./DateTimePretty";
import DateTime from "./DateTime";

const ModifyDateTime = DateTimePretty(DateTime);

export default function Video(props) {
    const { url, date } = props;
    return (
        <div className="video">
            <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <ModifyDateTime date={date} />
        </div>
    )
}