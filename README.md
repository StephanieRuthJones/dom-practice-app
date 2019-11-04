Trivia App Directions

FIRST: Create your server

All of the data is stored in the db.json file. You'll want to access this data using a JSON server. In order to do this, run the following two commands:

npm install -g json-server
json-server --watch db.json

THEN: 
1. Fetch trivia questions and answers from this url: 'http://localhost:3000/trivia'

2. console.log() the response to see data and its structure

3. Create an image to append to the header div

4. Set img source to "https://2cadxu4apic638boqt1kzcoz-wpengine.netdna-ssl.com/wp-content/uploads/2019/04/56553712_2391490011079150_2175175312202006528_n.jpg"

5. Append to "trivia-header"

6. Create bootstrap cards (with src, class, and inner text) for each trivia question: 

```
<div class="card">
    <img
    class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">Question: ...</h5>
        <p class="card-text">Answer: ...</p>
    </div>
</div>
```

7. Append bootstrap cards to "trivia-card-container"

