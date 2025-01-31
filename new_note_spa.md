```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa PAYLOAD  "content": "sending note", "date": "2025-01-31T13:04:17.114Z"
    activate server
    server-->>browser: HTML Status 201
    deactivate server
    
    browser: The browser updates notes on page according to spa.js

```

