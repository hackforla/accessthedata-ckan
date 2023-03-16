# What is this file? See README.md

{ pkgs ? (import ./pinned.nix) }:
let
in
  pkgs.mkShell {
    buildInputs = with pkgs; [
      python39
      yarn
      bore
    ];
    DMS="http://localhost:5000";
  }
