import React, { useEffect } from "react";
//components
import MultiChats from "../src/pages/multiChats/index";
//configs
import { config } from "./configs/config_connections";
import { socket } from "./configs/socket_export";
import Chat from "./pages/chat/index";
import { NotificationOnline } from "./pages/components/notificationOnline/index";
//context
import { useUser } from "./pages/context/allusers";
//pages
import Home from "./pages/home/index";
import Login from "./pages/login/index";
//refs
import { drawAttention, sendmessage } from "./scripts/refs";
import { Container } from "./styles";
import GlobalStyle from "./styles/global";

function App() {
    const { userChats, mode, chatRefText, chatRef, multiChatRef } = useUser();

    useEffect(() => {
        socket.on("send client message text", ({ message, socketidUser, socketidPerson, chatopen, usernamesend }) => {
            sendmessage({ chatRefText, chatRef, multiChatRef, message, socketidUser, socketidPerson, chatopen, usernamesend });
        });

        socket.on("Draw AttenAttention", ({ id, whosend, isend, statusperson }) => {
            drawAttention({ chatRefText, chatRef, multiChatRef, id, whosend, isend, statusperson });
        });
    }, []);

    return (
        <Container>
            <NotificationOnline />

            {mode === "login" ? (
                <Login />
            ) : (
                <>
                    <Home />

                    {userChats && userChats.map((elem, index) => <Chat key={elem.socketidperson} chatRefText={chatRefText} ref={{ chatRefText: (el) => (chatRefText.current[index] = el), chatRef: (el) => (chatRef.current[index] = el) }} socketidperson={elem.socketidperson} visible={elem.visible} />)}

                    <div id="multi-chats">
                        {userChats &&
                            userChats.map((elem, index) => (
                                <MultiChats key={elem.socketidperson} chatRefProps={{ chatRefText: (el) => (chatRefText.current[index] = el), chatRef: (el) => (chatRef.current[index] = el) }} ref={(el) => (multiChatRef.current[index] = el)} socketidperson={elem.socketidperson} />
                            ))}
                    </div>
                </>
            )}

            <GlobalStyle />
        </Container>
    );
}

export default App;
