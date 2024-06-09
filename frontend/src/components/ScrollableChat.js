import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import {
  isFirstMessage,
  isSameSender,
  isSameSenderMargin,
  isSameUser,
} from "../config/ChatLogics";
import { ChatState } from "../Context/chatProvider";
import { Avatar, Tooltip } from "@chakra-ui/react";

const ScrollableChat = ({ messages }) => {
  const { user } = ChatState();

  return (
    <ScrollableFeed>
      {messages &&
        messages.map((m, i) => (
          <div style={{ display: "flex" }} key={m._id}>
            {(isSameSender(messages, m, i, user._id) ||
              isFirstMessage(messages, i, user._id)) && (
              <Tooltip label={m.sender.name} placement="bottom-start" hasArrow>
                <Avatar
                  mt={"7px"}
                  mr={1}
                  size={"sm"}
                  cursor={"pointer"}
                  name={m.sender.name}
                ></Avatar>
              </Tooltip>
            )}

            <span
              style={{
                display: "inline-block",
                backgroundColor: `${
                  m.sender._id === user._id ? "#dcf8c6" : "#b3e0ff"
                }`,
                borderRadius: "10px",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                padding: "5px 15px",
                maxWidth: "70%",
                marginLeft: isSameSenderMargin(messages, m, i, user._id),
                marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                alignSelf: `${
                  m.sender._id === user._id ? "flex-end" : "flex-start"
                }`,
              }}
            >
              {m.content}

              <span
                style={{
                  marginLeft: "10px",
                  fontSize: "0.6em",
                }}
              >
                {new Date(m.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </span>
          </div>
        ))}
    </ScrollableFeed>
  );
};

export default ScrollableChat;
