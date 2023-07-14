import React from "react";
import "../assets/css/box.css";
const Box = (props) => {
    return (
        <div>
            <div className="box-wrapper"
                style={
                    { backgroundColor: props.boxColor }
                }>
            </div>
        </div>
    );
}
export default Box;