# Breast Histopathology AI Triage System

An AI-powered web application for breast histopathology image analysis using ResNet50 deep learning model.

## 🎗️ Features

- **AI-Powered Analysis**: ResNet50 model trained on BreakHis dataset
- **Batch Processing**: Analyze multiple images simultaneously
- **Beautiful UI**: Modern React interface with medical-themed animations
- **Real-time Results**: Instant predictions with confidence scores
- **Research Focus**: Designed for educational and research purposes

## 🚀 Quick Deploy Options

### Option 1: Railway + Vercel (Recommended)
1. Deploy backend to Railway
2. Deploy frontend to Vercel
3. Set environment variables

### Option 2: Hugging Face Spaces
1. Upload to Hugging Face Spaces
2. Automatic deployment with Streamlit

### Option 3: Render
1. Deploy backend to Render
2. Deploy frontend to Netlify

## 📁 Project Structure

```
breast-histo-inference/
├── api/                    # FastAPI backend
│   └── main.py
├── app/                    # ML inference code
│   ├── inference.py
│   └── utils.py
├── histo-ui/              # React frontend
│   ├── src/
│   └── package.json
├── models/                 # Trained PyTorch models
├── requirements.txt
└── Dockerfile
```

## 🛠️ Local Development

1. **Backend:**
   ```bash
   pip install -r requirements.txt
   uvicorn api.main:app --reload
   ```

2. **Frontend:**
   ```bash
   cd histo-ui
   npm install
   npm run dev
   ```

## ⚠️ Disclaimer

This application is for **research and educational purposes only**. It is not intended for clinical diagnosis or medical decision-making.

## 📄 License

Research use only. Not for commercial use.
