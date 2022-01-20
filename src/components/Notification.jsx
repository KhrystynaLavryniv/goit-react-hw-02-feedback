import React from "react";
import PropTypes from "prop-types";
import { NotificationText } from "./Notification.style";

const Notification = ({ message }) => (
  <NotificationText>{message}</NotificationText>
);

export default Notification;

Notification.prototypes = {
  message: PropTypes.number.isRequired,
};
