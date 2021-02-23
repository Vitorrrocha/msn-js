import React from "react";

import { Container } from "./styles";

//images
import online from "./assets/online.png";
import invisible from "./assets/invisible.png";
import busy from "./assets/busy.png";
import away from "./assets/away.png";
import listen from "./assets/listen-music.png";

//components
import AeroButton from "../../../../../components/aeroButton/index";

//configs
import { socket } from "../../../../../../configs/socket_export";

//context
import { useUser } from "../../../../../context/allusers";

const Contact = (props) => {
    const { chatRef, chatRefText } = useUser();

    let status;
    switch (props.status) {
        case "online":
            status = online;
            break;
        case "busy":
            status = busy;
            break;
        case "away":
            status = away;
            break;
        case "offline":
            status = invisible;
            break;
        default:
    }

    const handleCustomClick = (socketidperson) => {
        console.log(props.music);

        socket.emit("click on chat", socketidperson);

        if (chatRefText) {
            const indexPersonChat = chatRefText.current.findIndex((elem) => {
                if (!elem) return false;
                if (elem.id === socketidperson) return socketidperson;
            });
        }
    };

    return (
        <Container>
            <AeroButton id="button" onCustomClick={(e) => handleCustomClick(props.socketid)} disabled={props.disabled}>
                <img src={status} alt="" />
                {props.disabled === true && <p>(você)</p>}
                {props.username && <p id="contact-username">{props.username}</p>}
                {props.music.name ? (
                    props.music.name ? (
                        <>
                            <a style={{ marginLeft: 5 }}>-</a>
                            <img src={listen} alt="" style={{ marginLeft: 5, width: 15, marginTop: 2 }} />
                            <a id="contact-music" href={props.music.url} target="_blank">
                                {props.music.name} ({props.music.author})
                            </a>
                        </>
                    ) : (
                        <p id="contact-subnick"></p>
                    )
                ) : props.subnick ? (
                    <p id="contact-subnick">- {props.subnick}</p>
                ) : (
                    <p id="contact-subnick"></p>
                )}
                {/* {props.subnick ? <p id="contact-subnick">- {props.subnick}</p> : <p id="contact-subnick"></p>} */}
                {/* {props.subnick ? <p id="contact-subnick">- {props.subnick}</p> : <p id="contact-subnick"></p>} */}
            </AeroButton>
        </Container>
    );
};

export default Contact;
