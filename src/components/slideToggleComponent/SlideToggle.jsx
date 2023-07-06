import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./SlideToggle.css";


export const SlideToggle = ({ stateProp, className }) => {
    const [state, dispatch] = useReducer(reducer, {
        state: stateProp || "one",
    });
    return (
        <div
            className={`slide-toggle ${state.state} ${className}`}
            onClick={() => {
                dispatch("click");
            }}
        >
            <div className="slider-button">
                <div className="ellipse" />
            </div>
        </div>
    );
};
function reducer(state, action) {
    if (state.state === "one") {
        switch (action) {
            case "click":
                return {
                    state: "two",
                };
        }
    }
    if (state.state === "two") {
        switch (action) {
            case "click":
                return {
                    state: "one",
                };
        }
    }
    return state;
}

SlideToggle.defaultProps = {
    stateProp: "one",
    className: "slideToggle-container"
}

SlideToggle.propTypes = {
    stateProp: PropTypes.oneOf(["two", "one"]).isRequired,
    className: PropTypes.string.isRequired
};