# What is this file? See README.md

{ pkgs ? (import ./pinned.nix) }:
let
in
  pkgs.mkShell {
    buildInputs = with pkgs; [
      python39
      yarn
      bore-cli
    ];
    DMS="http://localhost:5000";
  }