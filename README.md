# Crypto Tracker AI

A **real-time cryptocurrency monitoring and AI-powered prediction platform** built for both casual users and professional investors. This project combines live price tracking, customizable alerts, and premium LSTM-based forecasting models into one user-friendly dashboard.

---

##  Features

-  **Real-time Price Tracking** using CoinGecko and Yahoo Finance APIs
-  **Custom Alerts** for price thresholds via browser/email
-  **AI Price Prediction** (7–10 day forecast using LSTM)
-  **Historical & Predicted Trend Visualization**
-  **Responsive Web App** built with React.js + Tailwind CSS
-  **Interactive Streamlit Dashboard** for predictions
-  **Freemium Model**: Core features free, predictions premium

##  How to Run the Project

###  Prerequisites

- Node.js and npm
- Anaconda (with Python and Streamlit installed)
- Git (for cloning if required)

###  Project Structure

- Frontend (React.js) – for real-time tracker UI
- Backend/AI Module (Python + Streamlit) – for ML-based price prediction

---

###  Run Instructions

####  1️⃣**Frontend (VS Code – React App)**

1. Open `crypto-tracker` folder in **VS Code**
2. Open terminal:
   ```bash
   npm install         # First-time only
   npm run dev         
   
#### 2️⃣Backend (Anaconda Prompt – Streamlit)
    
      cd lsm_crypto
      conda activate crypto-predict
      streamlit run app.py



---

##  Folder Structure (sample)
crypto-tracker/
│
├── backend/
│ ├── app.py
│ └── models/
│
├── frontend/
│ ├── components/
│ └── pages/
│
├── ai-models/
│ ├── train_lstm.py
│ ├── saved_models/
│ └── prediction_dashboard/
│
├── .gitignore
├── README.md
└── requirements.txt





