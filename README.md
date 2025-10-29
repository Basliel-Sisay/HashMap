<h1>🗂️ HashMap Implementation in JavaScript</h1>

A robust and educational implementation of a HashMap data structure in JavaScript, designed for clarity, collision handling, and testability. This project demonstrates core principles of hashing, bucket management, and dynamic key-value storage ideal for learners, interview prep, or integration into lightweight applications.

<h2>📦 Features</h2>

- 🔑 set(key, value) - Adds or updates a key-value pair <br>
- 🔍 get(key) - Retrieves the value associated with a key <br>
- 🧹 remove(key) - Deletes a key-value pair if it exists <br>
- 🧠 Custom hash function using prime multiplication <br>
- 🧪 Manual test suite for validation and edge case coverage <br>
- 🧱 Collision handling via bucket arrays <br>

<h2>🧑‍💻 Usage</h2>

1. Clone the repository

git clone https://github.com/Basliel-Sisay/HashMap.git

cd HashMap

2. Run the test suite

node example.js

This will execute a series of functional tests and print pass/fail results to the console.

<h2>📁 File Structure</h2>
<pre>
HashMap/
├── HashMap.js       # Core class implementation
├── example.js       # Test suite runner
├── package.json     # Project metadata and module type
└── README.md        # Project documentation
</pre>

<h2>🧪 Test Coverage</h2>

<h3>The test suite includes:</h3>

- ✅ Basic insertion and retrieval  <br>
- ✅ Overwriting existing keys <br>
- ✅ Key removal and length tracking <br>
- ✅ Collision handling with forced bucket overlap <br>
- ✅ Edge cases like removing non-existent keys <br>

<h2>📚 Educational Value</h2>

<h3>This project is ideal for:</h3>

- Students learning data structures <br>
- Developers preparing for technical interviews <br>
- Engineers building custom storage layers <br>
- Anyone curious about how hash maps work under the hood <br>

<h2>🛠️ Requirements</h2>

- Node.js v14 or higher <br>
- No external dependencies <br>

<h2>🤝 Contributing</h2>

Pull requests are welcome! If you'd like to extend functionality (e.g., has(key), keys(), clear()), feel free to fork and submit improvements.

<h2>📜 License </h2>

This project is licensed under the MIT License.

<h2>🙋 Author</h2>

Developed by Basliel Sisay - Software Engineering student at Addis Ababa University, passionate about accessibility, clean code, and inclusive design.
