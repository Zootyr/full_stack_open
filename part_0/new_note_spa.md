Single-page app does not reload page, page is updated accoriding to spa.js and note is sent to server.
```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa PAYLOAD  "content": "sending note", "date": "2025-01-31T13:04:17.114Z"
    activate server
    server-->>browser: HTML Status 201
    deactivate server
    
    Note right of browser: : The browser updates notes on page according to spa.js

```

