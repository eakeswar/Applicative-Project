# Applicative Project

A crop classification web application built with Python (Flask) and a modern HTML/CSS frontend. The current trained model identifies images of **chilli** and **maize**.

## 🚀 Project Overview

- **Backend:** Python (Flask) serving a machine learning model for image classification.
- **Frontend:** HTML, CSS, and JavaScript – clean user interface with crop info pages.
- **Features:** Upload crop images, get predictions and educational information.

## 🧠 Model Capability

**Current Ability:**  
- The included ML model recognizes only **chilli** and **maize** images.

**Expansion Potential:**  
- The model structure supports multi-class classification.  
- By retraining on a diverse dataset (with new labeled images), it can learn to identify additional crops such as wheat, paddy, cotton, etc.
- Future model updates can be easily integrated for broader classification.

## 📁 Repository Structure

Applicative-Project/
├── app.pdf # Project documentation
├── app.py # Main backend code
├── models/
│ └── imageclassifier.keras # Trained model (chilli/maize)
├── public/
│ ├── [crop].html # Crop info pages
│ ├── [crop]/ # Crop images
│ ├── scripts.js, styles.css # Frontend
├── templates/
│ ├── index.html # Main web page
│ └── results.html # Results page
├── crop classification completed (1).pdf/.html
├── .gitignore
├── .gitattributes


## 📦 How to Run

1. **Clone this repository:**  
git clone https://github.com/eakeswar/Applicative-Project.git
cd Applicative-Project


2. **Set up a Python environment:**  
*(Python 3.8+ recommended)*
python -m venv .venv

On Windows:
.venv\Scripts\activate

On macOS/Linux:
source .venv/bin/activate
pip install -r requirements.txt

3. **Start the Flask backend:**  
python app.py


4. **Open the application:**  
- Use the web link shown by Flask (`localhost:xxxx`).
- Or open relevant HTML files in `public/` for browsing static pages.

## 🌱 Features

- Upload an image (works on **chilli** and **maize**).
- Displays instant prediction and related crop information.
- Minimal, educational user interface.
- Static pages and images for a range of crops.

## ⚠️ Notes

- **Model limitation:** Currently classifies only chilli and maize.
- **All required code, data, and model files are included in this repository.**
- For production-scale or expanded crop recognition, update the model and retrain with a larger dataset.

## 📚 For Reviewers/Instructors

- All source code, static assets, model, and documentation are included.
- Feel free to run, review, or extend this application for coursework or demonstration.

---

**Author:** Dara Eakeswar Rayudu  
B.Tech. CSE with Data Science, Woxsen University

*This project is for academic demonstration. For production or new crops, retrain the model with additional labeled data and update the documentation accordingly.*
