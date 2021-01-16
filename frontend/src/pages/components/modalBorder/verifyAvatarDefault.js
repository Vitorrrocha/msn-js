import avatarDefault from "./assets/avatar-default.png";
import leaf from "./assets/defaultAvatars/leaf.png";
import basketball from "./assets/defaultAvatars/basketball.png";
import bonsai from "./assets/defaultAvatars/bonsai.png";
import chef from "./assets/defaultAvatars/chef.png";
import chess from "./assets/defaultAvatars/chess.png";
import doctor from "./assets/defaultAvatars/doctor.png";
import dog from "./assets/defaultAvatars/dog.png";
import electric_guitar from "./assets/defaultAvatars/electric_guitar.png";
import executive from "./assets/defaultAvatars/executive.png";
import fall from "./assets/defaultAvatars/fall.gif";
import fish from "./assets/defaultAvatars/fish.png";
import flare from "./assets/defaultAvatars/flare.png";
import gerber_daisy from "./assets/defaultAvatars/gerber_daisy.png";
import golf from "./assets/defaultAvatars/golf.png";
import guest from "./assets/defaultAvatars/guest.png";
import guitar from "./assets/defaultAvatars/guitar.png";
import kitten from "./assets/defaultAvatars/kitten.png";
import morty from "./assets/defaultAvatars/morty.png";
import music from "./assets/defaultAvatars/music.png";
import robot from "./assets/defaultAvatars/robot.png";
import seastar from "./assets/defaultAvatars/seastar.png";
import shopping from "./assets/defaultAvatars/shopping.png";
import soccer from "./assets/defaultAvatars/soccer.gif";
import sports from "./assets/defaultAvatars/sports.png";
import spring from "./assets/defaultAvatars/spring.gif";
import summer from "./assets/defaultAvatars/summer.gif";
import surf from "./assets/defaultAvatars/surf.png";
import tennis from "./assets/defaultAvatars/tennis.png";
import winter from "./assets/defaultAvatars/winter.gif";

export const defaultPhotosArray = [
    "leaf",
    "basketball",
    "bonsai",
    "chef",
    "chess",
    "doctor",
    "dog",
    "electric_guitar",
    "executive",
    "fall",
    "fish",
    "flare",
    "gerber_daisy",
    "golf",
    "guest",
    "guitar",
    "kitten",
    "morty",
    "music",
    "robot",
    "seastar",
    "shopping",
    "soccer",
    "sports",
    "spring",
    "summer",
    "surf",
    "tennis",
    "winter",
];

export const verifyAvatarDefault = (avatarname) => {
    if (!avatarname) return avatarDefault;

    if (avatarname === "leaf") return leaf;
    if (avatarname === "basketball") return basketball;
    if (avatarname === "bonsai") return bonsai;
    if (avatarname === "chef") return chef;
    if (avatarname === "chess") return chess;
    if (avatarname === "doctor") return doctor;
    if (avatarname === "dog") return dog;
    if (avatarname === "electric_guitar") return electric_guitar;
    if (avatarname === "executive") return executive;
    if (avatarname === "fall") return fall;
    if (avatarname === "fish") return fish;
    if (avatarname === "flare") return flare;
    if (avatarname === "gerber_daisy") return gerber_daisy;
    if (avatarname === "golf") return golf;
    if (avatarname === "guest") return guest;
    if (avatarname === "guitar") return guitar;
    if (avatarname === "kitten") return kitten;
    if (avatarname === "morty") return morty;
    if (avatarname === "music") return music;
    if (avatarname === "robot") return robot;
    if (avatarname === "seastar") return seastar;
    if (avatarname === "shopping") return shopping;
    if (avatarname === "soccer") return soccer;
    if (avatarname === "sports") return sports;
    if (avatarname === "spring") return spring;
    if (avatarname === "summer") return summer;
    if (avatarname === "surf") return surf;
    if (avatarname === "tennis") return tennis;
    if (avatarname === "winter") return winter;

    return avatarname;
};
