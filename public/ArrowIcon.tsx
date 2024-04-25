import React from "react";
import { IconSvgProps } from "./types";
import "./ArrowIcon.styles.css";

export const ArrowIcon = ({
 ...props
}: IconSvgProps) => (
    <svg id="right" className="arrow-right my-auto dark:invert">
        <path
            d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"
            fill=""
        ></path>
    </svg>
);