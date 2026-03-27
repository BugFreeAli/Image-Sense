<div align="center">

  <h1>👁️‍🗨️ ImageSense // Veritas</h1>
  <h3>The Complete Multimodal AI Forensic Suite</h3>
  
  <p>
    <strong>An enterprise-grade deep learning platform engineered to detect synthetic media across Images, Video, and Audio with 85%+ real-world accuracy.</strong>
  </p>

  <p>
    <a href="#-the-neural-engine"><strong>🧠 The ML Architecture</strong></a> •
    <a href="#-solving-data-leakage-the-secret-sauce"><strong>🔬 Data Engineering</strong></a> •
    <a href="#-multimodal-forensics"><strong>🎥 Forensic Features</strong></a> •
    <a href="#-system-architecture"><strong>🏗️ Architecture</strong></a>
  </p>

  <img src="https://img.shields.io/badge/Python-3.10-3776AB?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/TensorFlow-2.17-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" />
  <img src="https://img.shields.io/badge/PyTorch-Audio-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-0.109-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenCV-Vision-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" />
  <img src="https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white" />

</div>

<br/>

<!-- 📸 PLACEHOLDER: Put a screenshot of your beautiful UI here -->
<img width="1258" height="592" alt="Screenshot 2026-03-27 094752" src="https://github.com/user-attachments/assets/bc6d4e2e-31f9-4572-9977-870a6dbedc2f" />

<img width="1194" height="589" alt="Screenshot 2026-03-27 095314" src="https://github.com/user-attachments/assets/b736d87b-748f-4b86-85ef-bececdc3dce1" />


<img width="1152" height="593" alt="image" src="https://github.com/user-attachments/assets/6553b403-5734-435e-9267-9ffa82334bfd" />
---

## 📖 Executive Summary

As Generative AI evolves from obvious manipulation to hyper-realistic synthesis, standard detection algorithms are failing. **ImageSense** was engineered from the ground up to combat modern misinformation by analyzing the invisible mathematical fingerprints left by Latent Diffusion, Flow Matching, and GAN architectures.

This project goes beyond simple classification. It is a **Full-Stack, Multimodal Forensic Platform** that provides visual explainability (XAI), temporal video analysis, and spectral audio verification—all wrapped in a high-performance, edge-deployed React application.

---

## 🧠 The Neural Engine (Machine Learning)

To build a robust detector, I avoided generic object-detection models and focused entirely on **texture and frequency anomalies**.

### 1. Visual Forensics: Custom `EfficientNetV2-B0`
*   **Why EfficientNetV2?** Its Fused-MBConv layers are highly sensitive to the high-frequency spatial noise (micro-checkerboard patterns) inherent in Diffusion models.
*   **Aggressive Fine-Tuning:** I initialized with ImageNet weights, but unfroze the top **100 layers**. Using the **AdamW optimizer** (with decoupled weight decay), I forced the model to rewrite its deep feature extraction logic specifically for synthetic artifacts.
*   **Zero-Shot Robustness:** Injected `GaussianNoise(0.05)` during training to simulate physical camera ISO grain, preventing the model from over-relying on digital "cleanness" as a marker for AI.

### 2. Audio Forensics: `Wav2Vec2` Transformer
*   Integrated a fine-tuned **Wav2Vec2** speech transformer for audio deepfake detection.
*   The model analyzes spectral gaps and vocoder artifacts in `.mp3`/`.wav` files, capable of detecting advanced voice clones (e.g., ElevenLabs) with >98% accuracy.

---

## 🔬 Solving "Data Leakage" (The Secret Sauce)

The biggest trap in AI detection is **Format Leakage**—where a model learns to associate PNGs with AI and JPGs with Real photos, resulting in 99% fake accuracy but 0% real-world utility.

**My MLOps Pipeline:**
1.  **Format Sanitization:** I wrote a Python ingestion script that forces *every* training image (Real and Fake) into a standardized `JPEG (Quality 90)` format. The model is forced to analyze *pixels*, not file headers.
2.  **UUID Shuffling:** Eliminated validation bias by renaming 26,000+ images using `uuid4`, ensuring a perfectly randomized distribution across training batches.
3.  **The Flux Injection:** To ensure the model remains state-of-the-art, I manually scraped and injected data from **Flux.1-Dev** (Flow Matching), bridging the gap between older Diffusion models and 2025-era generators.

---

## 🕵️‍♂️ Multimodal Forensic Features

This platform does not operate as a "Black Box." It provides explainable, actionable intelligence.

*   🌡️ **Neural X-Ray (GradCAM Heatmaps):** Implemented Gradient-weighted Class Activation Mapping via TensorFlow GradientTape. When an image is flagged as AI, the backend dynamically generates a heat map highlighting the exact pixels (e.g., asymmetric pupils, distorted fingers) that triggered the network.
*   🎞️ **Temporal Video Sentinel:** The backend uses **OpenCV** to extract distributed keyframes from `.mp4` uploads. It analyzes the temporal timeline and returns a frame-by-frame array, identifying exactly *when* a deepfake face-swap glitches.
*   🔊 **Vocal Spectral Analysis:** Processes human speech using `librosa` at 16kHz to detect synthetic frequency gaps in voice notes.

---

## 🏗️ System Architecture

The application is built on a highly scalable, decoupled **Microservices Architecture**.

```mermaid
graph TD
  A[React/Vite Client] -->|Multipart FormData| B(FastAPI Router)
  B --> C{Multimodal Engine}
  C -->|Image| D[EfficientNetV2 Tensor]
  D -->|GradCAM| E[Base64 Heatmap Gen]
  C -->|Video| F[OpenCV Keyframer]
  C -->|Audio| G[Wav2Vec2 Spectral Scan]
  E --> H[JSON Response]
  F --> H
  G --> H
  H --> A
