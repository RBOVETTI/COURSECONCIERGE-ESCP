---
title: "Machine Learning Applications in Food & Beverage"
lectureNumber: 4
date: "2026-03-09"
duration: 180
image: "/images/lectures/lecture4.png"
pdfFile: "/pdfs/lecture-4.pdf"
description: "Deep dive into ML algorithms, feature engineering, model evaluation, and real-world F&B applications from demand forecasting to quality control."
keywords:
  - Machine Learning
  - Supervised Learning
  - Feature Engineering
  - Model Evaluation
  - Random Forest
  - Neural Networks
  - Demand Forecasting
  - Quality Control
  - Customer Segmentation
  - Recommendation Systems
objectives:
  - Master core ML algorithms and their appropriate use cases
  - Perform effective feature engineering and selection
  - Evaluate and compare model performance rigorously
  - Apply ML to F&B challenges - demand forecasting quality assurance pricing
  - Avoid common pitfalls - overfitting data leakage biased training sets
  - Deploy and maintain ML models in production environments
---

## 1. ML Algorithm Selection: Matching Tools to Problems

Selecting the appropriate algorithm requires understanding both the problem structure and algorithmic characteristics.

### Decision Framework

**Question 1: What are you predicting?**
- **Numerical value** → Regression algorithms
- **Category/class** → Classification algorithms
- **No prediction, finding patterns** → Clustering algorithms

**Question 2: How much data do you have?**
- **< 1,000 samples** → Simple models (linear regression, logistic regression)
- **1,000 - 100,000 samples** → Tree-based models (random forests, gradient boosting)
- **> 100,000 samples** → Neural networks (deep learning)

**Question 3: Do you need interpretability?**
- **Yes, must explain predictions** → Linear models, decision trees
- **No, only accuracy matters** → Ensemble methods, neural networks

## 2. Feature Engineering: The Art of ML

Feature engineering—transforming raw data into meaningful model inputs—often determines success more than algorithm choice.

### Types of Features

**1. Numerical Features:**
- Raw values (temperature, price, quantity)
- Transformed (log, square root, polynomial)
- Aggregations (mean, median, standard deviation)

**2. Categorical Features:**
- One-hot encoding (converting categories to binary columns)
- Label encoding (converting to integers)
- Frequency encoding (using category frequency as feature)

**3. Time-Based Features:**
- Day of week, month, quarter
- Time since last event
- Rolling windows (7-day average, 30-day trend)

**4. Text Features:**
- Bag of words (word frequency counts)
- TF-IDF (term frequency-inverse document frequency)
- Word embeddings (semantic vector representations)

### F&B Example: Demand Forecasting Features

**Raw Data:** Daily sales transactions

**Engineered Features:**
- **Time:** Day of week, month, holiday indicator
- **Lag:** Sales 7, 14, 30 days ago
- **Rolling Stats:** 7-day average, 30-day trend
- **External:** Weather, local events, promotions
- **Product:** Category, price tier, seasonality

**Impact:** Proper feature engineering can improve model accuracy by 20-50% compared to using raw data alone.

## 3. Model Evaluation: Beyond Accuracy

Accuracy alone is insufficient for evaluating model performance. Different metrics matter for different business contexts.

### Classification Metrics

**Confusion Matrix Components:**
- **True Positive (TP):** Correctly predicted positive
- **True Negative (TN):** Correctly predicted negative
- **False Positive (FP):** Incorrectly predicted positive (Type I Error)
- **False Negative (FN):** Incorrectly predicted negative (Type II Error)

**Derived Metrics:**

`\text{Precision} = \frac{TP}{TP + FP}`

*"Of all positive predictions, how many were correct?"*

`\text{Recall} = \frac{TP}{TP + FN}`

*"Of all actual positives, how many did we catch?"*

`\text{F1 Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}`

*"Harmonic mean balancing precision and recall"*

### Business Context Determines Metric Priority

**Food Safety Detection (Contamination):**
- **Priority:** High Recall (catch all contaminated products)
- **Trade-off:** Accept false positives (wasting some good product)
- **Rationale:** Missing contamination is catastrophic

**Customer Churn Prediction:**
- **Priority:** High Precision (target retention offers accurately)
- **Trade-off:** Accept false negatives (missing some at-risk customers)
- **Rationale:** Retention campaigns are costly; targeting wrong customers wastes budget

### Regression Metrics

**Mean Absolute Error (MAE):**
`MAE = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|`

*Average absolute difference between predictions and actuals*

**Root Mean Squared Error (RMSE):**
`RMSE = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}`

*Penalizes large errors more heavily than MAE*

**R-squared (R²):**
`R^2 = 1 - \frac{\sum (y_i - \hat{y}_i)^2}{\sum (y_i - \bar{y})^2}`

*Proportion of variance explained by the model (0 = no better than mean, 1 = perfect)*

## 4. Real-World F&B Applications

### Application 1: Demand Forecasting

**Business Problem:** Inventory optimization (minimize waste + stockouts)

**ML Approach:** Time series regression with gradient boosting

**Features:**
- Historical sales (lag features)
- Seasonality (day, week, month)
- Promotions and pricing
- Weather and events

**Performance:**
- **Baseline (historical average):** RMSE = 250 units
- **ML Model:** RMSE = 120 units (52% improvement)

**Business Impact:** 15% inventory reduction, 8% waste reduction

### Application 2: Quality Control (Visual Inspection)

**Business Problem:** Detect product defects on production line

**ML Approach:** Convolutional neural network (image classification)

**Training Data:** 50,000 labeled images (defective vs. acceptable)

**Performance:**
- **Accuracy:** 98.5%
- **Recall (defect detection):** 99.2%
- **Precision:** 97.8%

**Business Impact:**
- 24/7 inspection (vs. human fatigue)
- 30% reduction in defective products reaching customers
- ROI payback in 8 months

### Application 3: Customer Segmentation

**Business Problem:** Personalized marketing for diverse customer base

**ML Approach:** K-means clustering on customer behavior data

**Features:**
- Purchase frequency and recency
- Average transaction value
- Product category preferences
- Channel preferences (online vs. in-store)

**Segments Discovered:**
1. **Premium Loyalists:** High spend, frequent purchase, premium products
2. **Bargain Hunters:** Price-sensitive, promotion-driven
3. **Occasional Indulgers:** Infrequent but high-value purchases
4. **Routine Buyers:** Consistent, predictable, mid-tier spending

**Business Impact:**
- **Segment-specific campaigns:** 25% higher conversion vs. mass marketing
- **Retention improvement:** 12% reduction in churn among Premium Loyalists
- **Revenue growth:** 8% from targeted upselling

### Application 4: Dynamic Pricing

**Business Problem:** Optimize pricing for profitability and market share

**ML Approach:** Reinforcement learning with price elasticity modeling

**Inputs:**
- Historical price-demand relationships
- Competitor pricing
- Inventory levels
- Time-based factors

**Strategy:**
- **High inventory + low demand** → Price reduction to accelerate sales
- **Low inventory + high demand** → Price premium capture
- **Competitive context** → Match or undercut strategically

**Business Impact:**
- **Revenue increase:** 6-10% through optimized pricing
- **Margin improvement:** 3-5% through strategic premiums
- **Inventory turnover:** 20% faster

## 5. Common Pitfalls and Mitigation Strategies

### Pitfall 1: Overfitting

**Definition:** Model learns training data too well, including noise, failing to generalize to new data.

**Symptom:** Excellent training performance, poor validation/test performance

**Mitigation:**
- **Cross-validation:** Evaluate on multiple train/test splits
- **Regularization:** Penalize model complexity (L1/L2 penalties)
- **Simpler models:** Reduce features or model capacity
- **More data:** Larger training sets reduce overfitting risk

### Pitfall 2: Data Leakage

**Definition:** Training data contains information that wouldn't be available at prediction time.

**Example:** Predicting customer churn using "days since last login" as a feature. Churned customers have high values by definition, creating artificial perfect prediction.

**Mitigation:**
- **Time-aware splits:** Train on historical data, test on future data
- **Feature scrutiny:** Ensure features are available before prediction point
- **Domain expertise:** Validate features with business stakeholders

### Pitfall 3: Biased Training Data

**Definition:** Training data is not representative of deployment context.

**Example:** Training fraud detection on historical fraud cases (which were caught), missing evolving fraud patterns that evade detection.

**Mitigation:**
- **Data audits:** Analyze training data distributions vs. production data
- **Synthetic data:** Augment with simulated edge cases
- **Continuous learning:** Retrain models regularly with recent data

## 6. ML Model Deployment and Maintenance

### Production Deployment Considerations

**1. Latency Requirements:**
- **Batch predictions** (overnight): Complex models acceptable
- **Real-time predictions** (< 100ms): Optimized, lightweight models required

**2. Monitoring:**
- **Model performance:** Track accuracy/RMSE over time
- **Data drift:** Detect distribution changes in input features
- **Prediction drift:** Monitor output distribution shifts

**3. Retraining Cadence:**
- **Static environments:** Quarterly or semi-annual retraining
- **Dynamic environments:** Weekly or monthly updates
- **Trigger-based:** Retrain when performance degrades below threshold

## Key Takeaways

1. **Algorithm Selection is Problem-Specific:** Data size, interpretability needs, and problem structure dictate optimal algorithms.

2. **Feature Engineering > Algorithm Choice:** Thoughtful feature design typically improves performance more than selecting sophisticated algorithms.

3. **Metrics Must Align with Business Goals:** Accuracy alone is insufficient. Precision, recall, and error costs must reflect real-world priorities.

4. **F&B Applications are Diverse:** From demand forecasting to quality control to personalization, ML addresses strategic challenges across the value chain.

5. **Pitfalls are Predictable:** Overfitting, data leakage, and bias are common but avoidable with disciplined methodology.

6. **Deployment ≠ End:** Production ML requires monitoring, maintenance, and continuous improvement.

## Discussion Prompts

1. For a business process you're familiar with, design an ML application: What would you predict? What features would you engineer? How would you measure success?

2. Consider a critical classification problem (loan approval, fraud detection, quality control). Which error is more costly—False Positive or False Negative? How would this shape your model evaluation?

3. Describe a scenario where a deployed ML model might degrade over time. What would cause this degradation? How would you detect it? How would you address it?

## Further Reading

- Floridi, L. (2016). *The Fourth Revolution: How the Infosphere Is Reshaping Human Reality.* Oxford University Press.
- Mollick, E. (2024). *Co-Intelligence: Living and Working with AI.* Portfolio.
