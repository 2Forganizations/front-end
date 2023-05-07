// chat기능 임시

import React, { useEffect, useRef, useState } from "react";
import * as StompJs from "@stomp/stompjs";

// room Id, sender 파라미터 받아서 사용할듯?

interface IProps {
  roomId: string;
  sender: string;
}

const Chat = ({ roomId, sender }: IProps) => {
  const client: any = useRef({});
  // 채팅방에 있는 메시지
  const [chatMessages, setChatMessages] = useState<any>([]);
  // 내가 보낼 메시지
  const [message, setMessage] = useState("");

  useEffect(() => {
    connect();
    return () => disconnect();
  }, []);

  // 채팅 서버 연결
  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://18.234.230.215:9999/ws", // 웹소켓 서버로 직접 접속

      //   connectHeaders: {
      //     "auth-token": "spring-chat-auth-token",
      //   },
      debug: function (str) {
        console.log(str, "debug");
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: () => {
        subscribe();
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    client.current.activate();
  };

  const disconnect = () => {
    client.current.deactivate();
  };

  // 채팅방 들어가기
  const subscribe = () => {
    client.current.subscribe(`/sub/chat/room`, ({ body }: any) => {
      console.log(body, "body");
      setChatMessages((_chatMessages: any) => [..._chatMessages, JSON.stringify(body)]);
    });
  };
  // 채팅 보내기
  const publish = (message: any) => {
    if (!client.current.connected) {
      return;
    }

    client.current.publish({
      destination: "/pub/chat/message",
      body: JSON.stringify({
        type: "TALK",
        roomId: "1",
        sender: "minyoung2",
        message: message,
      }),
    });
    console.log(client, "client");
    setMessage("");
  };

  console.log(chatMessages, "chatMessages");
  return (
    <div>
      {chatMessages && chatMessages.length > 0 && (
        <ul>
          {chatMessages.map((el: any, index: any) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      )}
      <div>
        <input
          type={"text"}
          placeholder={"message"}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.which === 13 && publish(message)}
        />
        <button onClick={() => publish(message)}>send</button>
      </div>
    </div>
  );
};

export default Chat;
