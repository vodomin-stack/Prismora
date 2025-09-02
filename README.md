# XR 3D Movie Player (Pico 4) — WebXR PWA (v3)

A minimal WebXR stereoscopic video player for **Pico 4** (and other XR browsers).
Now includes an **in-headset overlay**, **audio controls**, **fine stereo alignment (per-eye offset/scale)**, and a **curved screen** mode (cylindrical).

## What’s new
- ⚙️ **Overlay UI** inside the player (toggle via gear, `O` key, or controller primary/trigger).
- 🔊 **Mute/volume** controls to satisfy autoplay rules.
- 👁️ **Per-eye X/Y offset + scale** to correct SBS/OU misalignments.
- 🌀 **Curved screen** (cylindrical segment) with adjustable **curvature degrees**.

## How to use
1. Host the folder over **HTTPS** (GitHub Pages works).  
2. On Pico Browser, open the URL and optionally **Install** the PWA.  
3. Load a **URL** or **local file**, **Play**, then **Enter VR**.  
4. Use ⚙️ overlay to adjust **layout, distance, width, orientation, alignment**, and **curvature**.

> Note: Most browsers block file pickers *while in VR*. Choose a local file **before** entering VR.

## Notes
- Works best with **H.264** sources in the browser. **HEVC/H.265** may require a native app.
- Some embedded sites (e.g., web players) won’t provide direct streams; this app expects direct video URLs or local files.
