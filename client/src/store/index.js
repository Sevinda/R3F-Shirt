import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#353934",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./scp.png",
  fullDecal: "./scp.png",
});

export default state;
