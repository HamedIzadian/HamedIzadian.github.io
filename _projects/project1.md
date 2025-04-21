---
title: "Bike Sharing Demand Prediction"
excerpt: "I’ll predict bike-sharing demand using machine learning and data mining.<br/><img src='/images/Bike_Sharing_1.png'>"
collection: projects
---

In this project, I’ll build a demand forecasting pipeline that combines historical rental counts with weather and time-of-day features to predict hourly bike-sharing usage. I’ll implement and compare several machine learning and data mining algorithms, such as linear regression, SVM, gradient boosting, and XGBoost, using cross-validation. Finally, I’ll evaluate each model (RMSE, MAE) and analyze feature importances to guide dynamic bike redistribution.

In this project, I aim to learn and teach at the same time. That's why I started this project: to learn new things and share what I've learned, so it can be helpful to someone else. At the end, I will share all the resources I've used to complete this project.

## 1- Project Overview

Now, let’s briefly explain our problem and how this prediction can help businesses increase their efficiency and profitability. In recent years, many businesses have sought to improve public transportation through bike-sharing systems. It is crucial for them to understand their future demand so they can make better decisions that lead to increased profits. Some costs, such as maintenance and establishing parking lots for bikes, can become significantly high if there is an excess of available bikes. Conversely, having a shortage of available bikes compared to demand can result in a revenue loss, making it essential to accurately predict bike-sharing demand.


## 2- Let's see what we are dealing with!

### 2-1- Imports % Settings: 

<pre style="font-size: 15px;">
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from scipy import stats

%matplotlib inline
sns.set_context("talk")
</pre>

* We are importing `Pandas` for data manipulation, cleaning, and exploration.
* `NumPy` is essential for numerical operations.
* `Matplotlib` is for basic plotting and quick visualization of distributions and trends.
* `Seaborn` provides more elegant and complex visualizations, especially statistical plots.
* `SciPy` would be helpful for statistical analysis, like handling outliers.

We will import other libraries later! 


