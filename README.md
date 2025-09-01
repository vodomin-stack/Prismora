# XR 3D Movie Player (Pico 4) — Single‑File PWA

This is a minimal WebXR stereoscopic video player for **Pico 4** and other XR browsers.
It renders a flat screen in immersive VR with **adjustable distance, width, tilt/yaw/roll**, and supports **Mono, SBS, OU** layouts with **swap eyes** and **parallax shift** (fine alignment).

> **Why:** Many VR browsers render 3D videos on a distant, fixed screen. Bringing the screen **closer and larger** restores the immersive stereoscopic effect.

## Files
- `index.html` — the app UI and WebXR WebGL renderer (uses `<video>` as a texture).
- `manifest.webmanifest` — PWA manifest so Pico Browser can **Install** it.
- `sw.js` — simple service worker to cache the app shell.
- `icon-192.png`, `icon-512.png` — app icons.

## How to run
1. **Host over HTTPS** (WebXR requires a secure context). Easiest options:
   - GitHub Pages (enable Pages for the repo).
   - Any static host (Netlify, Cloudflare Pages, etc.).
2. On your **Pico 4**:
   - Open the **Pico Browser**, visit your hosted URL.
   - Tap the browser menu and **Install app** (if offered) to add it to your library.
3. Load a **video URL** or choose a **local file**.
   - For web streaming, **H.264 MP4/HLS** is the safest bet in browsers.
   - HEVC/H.265 often requires a **native app**; if HEVC fails here, consider transcoding to H.264.
4. Click **Play** (starts muted), then **Enter VR**.
5. Use the sliders to set **Distance** and **Width** until it fills your FOV comfortably. Use **Swap eyes** or **Parallax Shift** if the stereo looks inverted or misaligned.

## Tips
- **Enter VR** requires a **user gesture** (click) and HTTPS.
- If playback is blocked or stutters, the source may be **DRM‑protected** or **HEVC**; try an H.264 source.
- Use **Recenter** to drop the screen directly in front of you again.

## Roadmap ideas
- Curved/cylindrical screen option for 180° content.
- Per‑eye vertical offset and convergence presets.
- Simple bookmarks for favorite video URLs.
- HLS (MSE) playlist loader with quality selection.
