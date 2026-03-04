# QUOTES RECOMMENDATION CHATBOT USING NLP

## Problem Definition

### 1. Business Problem

In today’s fast-paced digital environment, individuals frequently experience stress, demotivation, and emotional imbalance due to academic, professional, and personal challenges. Although motivational quotes are widely available online, users must manually search through multiple websites or platforms to find content that matches their emotional state.

This manual process is: 

- Time-consuming  
- Non-personalized  
- Inefficient  
- Lacking conversational interaction  

There is a need for an intelligent system that can understand user intent or emotion and recommend relevant quotes instantly through natural conversation.

---

### 2. Business Requirements

The proposed system should:

- Accept user input in natural language  
- Classify user intent using NLP  
- Recommend quotes based on identified emotion or category  
- Provide interactive conversational responses  
- Allow scalability for adding new quote categories  

---

### 3. Literature Survey

Existing quote platforms such as BrainyQuote and Goodreads provide categorized quotes but rely on manual browsing and keyword search. These systems do not offer real-time personalization or conversational interaction.

Conversational AI frameworks like Rasa enable intent classification and dialogue management using machine learning models such as DIETClassifier. Most chatbot implementations focus on customer service or FAQ automation rather than emotion-based quote recommendation.

There is a clear gap in systems that combine conversational AI with personalized motivational content delivery.

---

### 4. Social and Business Impact

This chatbot can:

- Improve emotional well-being through personalized motivational support  
- Increase user engagement through interactive conversation  
- Be extended for educational, wellness, or mental health applications  
- Serve as a foundation for AI-powered recommendation systems  

##  Prerequisites

Before running the Quotes Recommendation Chatbot, ensure the following requirements are installed and properly configured.

---

### 1. Python Environment

- Python 3.8 or above
- Virtual environment recommended

Create virtual environment:

```bash
python -m venv venv
```

Activate the environment:

```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

---

### 2. Anaconda (Optional)

Anaconda can be used for easier environment and dependency management.

Create a conda environment:

```bash
conda create -n chatbot_env python=3.8
conda activate chatbot_env
```

---

### 3. Rasa NLU Installation

Install Rasa using pip:

```bash
pip install rasa
```

Verify installation:

```bash
rasa --version
```

---

---

### 4. Dataset Requirements

The chatbot requires a structured dataset containing:

- Quote text
- Corresponding emotion or category label

Example format (CSV):

| quote | category |
|-------|----------|
| Never give up | motivation |
| Love conquers all | love |
| This too shall pass | hope |

---

### 5. Rasa Training Data Format

Training data must follow the Rasa YAML structure.

Example (`nlu.yml`):

```yaml
version: "3.1"

nlu:
- intent: sadness
  examples: |
    - I feel lonely
    - I am sad
    - I feel low

- intent: motivation
  examples: |
    - Inspire me
    - I need motivation
    - Encourage me
```

---

---

### 6. NLU Pipeline Configuration

The NLP pipeline is defined inside the `config.yml` file.

Example configuration:

```yaml
pipeline:
  - name: WhitespaceTokenizer
  - name: CountVectorsFeaturizer
  - name: DIETClassifier
  - name: EntitySynonymMapper
```

#### Pipeline Components

- **WhitespaceTokenizer** → Splits user input into tokens  
- **CountVectorsFeaturizer** → Converts text into numerical features  
- **DIETClassifier** → Performs intent classification  
- **EntitySynonymMapper** → Maps similar entities to a standard value  

### 7. Development Tools

The following tools are recommended for development:

- Visual Studio Code (or any preferred IDE)
- Git for version control
- Basic understanding of Python and NLP concepts

##  Project Workflow


## Project Workflow

The development of the Quotes Recommendation Chatbot follows a structured milestone-based workflow:

### Milestone 1: Define Problem / Problem Understanding
- Specify the business problem
- Define business requirements
- Conduct literature survey
- Analyze social or business impact

### Milestone 2: Environment Setup
- Install Rasa and required dependencies
- Set up the Rasa project structure

### Milestone 3: Data Collection & Model Building
- Create user queries (`nlu.yml`)
- Create bot responses (`domain.yml`)
- Define conversation stories (`stories.yml`)
- Train the chatbot model
- Store and manage trained models

### Milestone 4: Testing & Deployment
- Test model using Rasa shell
- Test using test stories
- Deploy chatbot using web interface
- Validate deployed chatbot

## Project Structure

## Project Structure

The project follows the standard Rasa directory structure:

```
quotes-recommendation-chatbot/
│
├── data/
│   ├── nlu.yml
│   └── stories.yml
│
├── domain.yml
├── config.yml
├── credentials.yml
├── endpoints.yml
│
├── models/
│
└── README.md
```

### Folder Description

- **data/** → Contains NLU training data and conversation stories  
- **nlu.yml** → User intents and training examples  
- **stories.yml** → Conversation flow definitions  
- **domain.yml** → Intents, entities, responses, and actions  
- **config.yml** → NLU pipeline configuration  
- **models/** → Stores trained chatbot models

## Features

- Emotion-based quote recommendation  
- Intent recognition using Rasa NLU  
- Structured conversation flow using stories  
- Custom NLU pipeline configuration  
- Scalable and modular chatbot architecture  
- Easy deployment using Rasa shell or web interface

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/your-username/quotes-recommendation-chatbot.git
cd quotes-recommendation-chatbot
```

### 2. Activate virtual environment

```bash
source venv/bin/activate   # macOS/Linux
venv\Scripts\activate      # Windows
```

### 3. Train the model

```bash
rasa train
```

### 4. Run the chatbot

```bash
rasa shell
```
## Model Testing & Evaluation

After training the chatbot model, testing was performed using Rasa’s built-in testing framework to evaluate the chatbot’s performance in predicting correct actions and responses.

### Testing Method

The chatbot was tested using the following command:
```bash
rasa test core
```
### Testing Results

The evaluation results obtained were:

| Metric | Value |
|------|------|
| Correct Predictions | 58 / 58 |
| Accuracy | 1.000 |
| Precision | 1.000 |
| F1 Score | 1.000 |

These results indicate that the chatbot correctly predicts the appropriate responses for all test stories.

### Confusion Matrix

The confusion matrix generated during testing shows that all predicted actions match the expected actions, indicating no misclassification during testing.

### Interpretation

- The chatbot correctly predicts actions for all test stories.
- The model achieved **100% accuracy** during testing.
- High precision and F1 score indicate correct intent recognition.
- The chatbot successfully returns the appropriate quote category based on user input.


## Conclusion

The Quotes Recommendation Chatbot demonstrates how Natural Language Processing and Rasa can be used to build an intelligent, emotion-aware conversational system. 

The project follows a structured development lifecycle including problem understanding, environment setup, model training, testing, and deployment.

This chatbot can be extended further by:
- Integrating a web frontend
- Connecting to a database of quotes
- Adding sentiment analysis
- Deploying on cloud platforms
