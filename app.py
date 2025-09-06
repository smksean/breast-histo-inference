import streamlit as st
import torch
import torchvision.transforms as transforms
from PIL import Image
import io
import os
from app.inference import BreastHistoModel

# Page config
st.set_page_config(
    page_title="Breast Histopathology AI",
    page_icon="🎗️",
    layout="wide"
)

# Load model
@st.cache_resource
def load_model():
    model_path = "models/resnet50_bh_e1_ts_probs.pt"
    return BreastHistoModel(model_path=model_path, class_names=["benign", "malignant"])

model = load_model()

# UI
st.title("🎗️ AI-Powered Breast Histopathology Triage")
st.markdown("**Reducing diagnostic backlog for pathologists with AI inference.**")
st.warning("⚠️ For research & educational purposes only. Not for clinical diagnosis.")

# File upload
uploaded_files = st.file_uploader(
    "Upload histopathology images",
    type=['png', 'jpg', 'jpeg'],
    accept_multiple_files=True
)

if uploaded_files:
    col1, col2 = st.columns(2)
    
    with col1:
        st.subheader("📸 Uploaded Images")
        for i, file in enumerate(uploaded_files):
            image = Image.open(file)
            st.image(image, caption=f"Image {i+1}", use_column_width=True)
    
    with col2:
        st.subheader("🔬 AI Analysis")
        
        if st.button("🚀 Analyze Images", type="primary"):
            with st.spinner("Analyzing images..."):
                all_probs = []
                votes = []
                
                for file in uploaded_files:
                    image = Image.open(file).convert("RGB")
                    img_tensor = model.transform(image).unsqueeze(0).to(model.device)
                    probs, idx = model.predict(img_tensor, return_label=False)
                    all_probs.append(torch.tensor(probs))
                    votes.append(int(idx))
                
                if all_probs:
                    # Aggregate results
                    stack = torch.stack(all_probs)
                    avg_probs = torch.mean(stack, dim=0)
                    final_idx = int(torch.argmax(avg_probs).item())
                    final_label = ["benign", "malignant"][final_idx]
                    
                    # Display results
                    st.success(f"🎯 **Prediction: {final_label.upper()}**")
                    
                    # Confidence chart
                    import pandas as pd
                    df = pd.DataFrame({
                        'Class': ['Benign', 'Malignant'],
                        'Confidence': [avg_probs[0].item() * 100, avg_probs[1].item() * 100]
                    })
                    st.bar_chart(df.set_index('Class'))
                    
                    # Detailed stats
                    st.metric("Benign Probability", f"{avg_probs[0].item()*100:.1f}%")
                    st.metric("Malignant Probability", f"{avg_probs[1].item()*100:.1f}%")
                    st.metric("Images Analyzed", len(uploaded_files))

# Footer
st.markdown("---")
st.markdown("**Histocare Diagnostics Ltd.** — AI-powered pathology support. Research use only.")