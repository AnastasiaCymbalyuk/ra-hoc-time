import React from "react";
import moment from "moment/moment";

export default function DateTimePretty(Component) {
    return function Wraper(props){
        const date = moment(props.date);
        const newDate = date.fromNow();
        return <Component date={newDate} />
    }
}