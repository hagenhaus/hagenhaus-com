# Future

1. On the Tools Tab, sort tools vertically.

1. Support Server Sent Events (SSE) as part of support for an Event Driven Architecture (EDA). [See this page](https://www.geeksforgeeks.org/what-is-server-sent-events-in-html5/) and [this one](https://medium.com/event-driven-utopia/event-driven-apis-understanding-the-principles-c3208308d4b2). Check this out:

    ``` nonum
    if (typeof EventSource !== "undefined") {
      console.log('Browser supports SSE.');
    } else {
      console.log('Browser does not support SSE.');
    }
    ```

1. Save state to Local Storage.