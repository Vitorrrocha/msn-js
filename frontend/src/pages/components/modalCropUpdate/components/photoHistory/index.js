import React, { useEffect, useState } from "react";

import { Container } from "./styles";

//components
import ModalBorder from "../../../modalBorder";

//scripts
import { verifyAvatarDefault, defaultPhotosArray } from "../../../modalBorder/verifyAvatarDefault.js";

//images
import Logo from "./assets/msn-logo.png";

//configs
import { socket } from "../../../../../configs/socket_export";

const PhotoHistory = (props) => {
    const [photos, setPhotos] = useState();
    const [photoFocus, setPhotoFocus] = useState();
    useEffect(() => {
        if (JSON.parse(localStorage.getItem("photosHistory"))) {
            console.log(JSON.parse(localStorage.getItem("photosHistory")));
            setPhotos(JSON.parse(localStorage.getItem("photosHistory")));
        }
    }, []);

    const handleClickChangeAvatarDefault = (elem) => {
        if (!elem) return false;
        socket.emit("change avatar", elem);
    };

    return (
        <Container>
            <div id="header">
                <p>
                    <img src={Logo} alt="" />
                    Imagem para Exibição
                </p>
                <p id="title-header">Selecione uma Imagem para exibição</p>
                <small>Escolha como você deseja aparecer no Messenger.</small>
            </div>
            <div id="mid">
                <div id="left">
                    <h5>Imagens comuns</h5>

                    <div id="photos-galary">
                        {defaultPhotosArray.map((elem) => (
                            <button
                                className="button-photos-galary"
                                onClick={() => {
                                    setPhotoFocus(verifyAvatarDefault(elem));
                                    handleClickChangeAvatarDefault(elem);
                                }}
                            >
                                <img src={verifyAvatarDefault(elem)}></img>
                            </button>
                        ))}
                    </div>
                </div>
                <div id="right">
                    <ModalBorder id="right-avatar-preview" avatar={photoFocus} size="64" minus="15" top="10px" left="2px" />
                    <button onClick={props.custom}>Custom</button>
                </div>
            </div>
            <div id="bottom">
                <button onClick={props.close}>Fechar</button>
            </div>

            {/* <h1>Avatares Disponiveis</h1>
            <h1>Ultimas custom photos utilizadas</h1>
            {photos.map((elem) => (
                <img src={elem} />
            ))}
            <button onClick={() => console.log(photos)}>asdadsasd</button> */}
        </Container>
    );
};

export default PhotoHistory;
