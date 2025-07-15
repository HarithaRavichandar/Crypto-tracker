import os
print(os.listdir('.'))
import streamlit as st
import yfinance as yf
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime
from sklearn.preprocessing import MinMaxScaler
from keras.models import load_model

# Load Models for all coins
models = {
    'BTC-USD': load_model("btc-model.keras"),
    'ETH-USD': load_model("eth-model.keras"),
   
    'ADA-USD': load_model("ada-model.keras"),
    
    'SOL-USD': load_model("sol-model.keras"),
    'DOGE-USD': load_model("doge-model.keras")
}

# Dropdown for coin selection
st.title("Cryptocurrency Price Prediction")
coin = st.selectbox("Select a coin", ['BTC-USD', 'ETH-USD', 'ADA-USD',  'SOL-USD', 'DOGE-USD'])

# Define function to plot data and predictions
def plot_data(stock_data, predictions, future_predictions):
    fig, ax = plt.subplots(figsize=(15, 6))

    # Plot actual data vs predictions
    ax.plot(stock_data.index, stock_data['Close'], label="Actual Close Price", color='blue', linewidth=2)
    ax.plot(predictions.index, predictions['Prediction'], label="Predicted Close Price", color='red', linewidth=2)
    ax.set_title(f"Prediction vs Actual Close Price for {coin}", fontsize=16)
    ax.set_xlabel("Years", fontsize=14)
    ax.set_ylabel('Price', fontsize=14)
    ax.grid(alpha=0.3)
    ax.legend(fontsize=12)

    # Plot future predictions
    fig2, ax2 = plt.subplots(figsize=(15, 6))
    ax2.plot(range(1, 11), future_predictions, marker="o", label='Prediction Future Prices', color='purple', linewidth=2)
    for i, val in enumerate(future_predictions):
        ax2.text(i + 1, val, f'{val:.2f}', fontsize=10, ha='center', va='bottom', color='black')
    ax2.set_title("Future Close Prices for 10 Days", fontsize=16)
    ax2.set_xlabel("Day Ahead", fontsize=14)
    ax2.set_ylabel('Close Price', fontsize=14)
    ax2.grid(alpha=0.3)
    ax2.legend(fontsize=12)
    
    # Show both plots
    st.pyplot(fig)
    st.pyplot(fig2)

# Function to prepare data for LSTM model
def prepare_data(coin):
    # Fetch the stock data for the selected coin
    end = datetime.now()
    start = datetime(end.year-15, end.month, end.day)
    stock_data = yf.download(coin, start=start, end=end)
    
    # Preprocess closing prices
    closing_price = stock_data[['Close']]
    
    # Scale the data
    scaler = MinMaxScaler(feature_range=(0, 1))
    scaled_data = scaler.fit_transform(closing_price[['Close']].dropna())
    
    # Prepare data for LSTM
    base_days = 100
    x_data = []
    y_data = []
    for i in range(base_days, len(scaled_data)):
        x_data.append(scaled_data[i-base_days:i])
        y_data.append(scaled_data[i])
    x_data = np.array(x_data)
    y_data = np.array(y_data)
    
    return stock_data, x_data, y_data, scaler,scaled_data

# Function to predict and display the results
def make_prediction(coin):
    # Prepare data
    stock_data, x_data, y_data, scaler,scaled_data = prepare_data(coin)
    
    # Load the corresponding model
    model = models[coin]
    
    # Split data into train and test sets
    train_size = int(len(x_data) * 0.9)
    x_train, y_train = x_data[:train_size], y_data[:train_size]
    x_test, y_test = x_data[train_size:], y_data[train_size:]
    
    # Make predictions
    predictions = model.predict(x_test)
    inv_predictions = scaler.inverse_transform(predictions)
    inv_y_test = scaler.inverse_transform(y_test)
    
    # Prepare DataFrame for plotting
    plotting_data = pd.DataFrame({
        'Original': inv_y_test.flatten(),
        'Prediction': inv_predictions.flatten(),
    }, index=stock_data.index[train_size + 100:])
    
    # Predict future prices
    last_100 = scaled_data[-100:].reshape(1, -1, 1)
    future_predictions = []
    for _ in range(10):
        next_days = model.predict(last_100)
        future_predictions.append(scaler.inverse_transform(next_days))
        last_100 = np.append(last_100[:, 1:, :], next_days.reshape(1, 1, -1), axis=1)
    
    future_predictions = np.array(future_predictions).flatten()
    
    # Plot the results
    plot_data(stock_data, plotting_data, future_predictions)

# Display the prediction for selected coin
make_prediction(coin) 