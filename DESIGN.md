# Exposure / 64 — Design direction

## Direction

Assigned operate-mode direction translated into a darkroom exposure bench:
source text is exposed, bytes develop, and the result remains on a tray until
the user takes it.

## Visual system

- Coal black, paper cream, amber exposure light, oxidized blue for ready output,
  and rust for a failed tray.
- Barlow Condensed for the instrument face; Fira Code for readouts and payloads.
- Ruled trays, receipt-like status strips, and hairline technical borders; no
  generic rounded card stack.
- Status changes provide the authored feedback moment; reduced motion keeps all
  content visible immediately.

## Interaction contract

Encode/decode, swap, copy, clear, and invalid-input states remain local and
keyboard operable. The interface always states that it performs no upload.

## Responsive behavior

The two trays stack on narrow screens with the process arrow rotating between
them. Text remains readable and the output stays directly copyable.
