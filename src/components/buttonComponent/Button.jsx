import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./Button.css";


export const Button = ({ var1, className, text }) => {
    const [state, dispatch] = useReducer(reducer, {
        var2: var1 || "default",
    });
    return (
        <div
            className={`button ${state.var2} ${className}`}
            onMouseLeave={() => {
                dispatch("mouse_leave");
            }}
            onMouseEnter={() => {
                dispatch("mouse_enter");
            }}
        >
            <div className="overlap-group">
                <div className="submit">{text}</div>
            </div>
        </div>
    );
};

function reducer(state, action) {
    if (state.var2 === "default") {
        switch (action) {
            case "mouse_enter":
                return {
                    var2: "default-hover",
                };
        }
    }
    if (state.var2 === "default-hover") {
        switch (action) {
            case "mouse_leave":
                return {
                    var2: "default",
                };
        }
    }
    if (state.var2 === "alt") {
        switch (action) {
            case "mouse_enter":
                return {
                    var2: "alt-hover",
                };
        }
    }
    if (state.var2 === "alt-hover") {
        switch (action) {
            case "mouse_leave":
                return {
                    var2: "alt",
                };
        }
    }
    return state;
};

Button.defaultProps = {
    var1: "default",
    className: "button-instance",
    text: "Submit"
};

Button.propTypes = {
    var1: PropTypes.oneOf(["alt-hover", "default-hover", "alt", "default"]),
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
