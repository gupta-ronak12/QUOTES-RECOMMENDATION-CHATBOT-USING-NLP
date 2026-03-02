# QUOTES RECOMMENDATION CHATBOT USING NLP

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


  
