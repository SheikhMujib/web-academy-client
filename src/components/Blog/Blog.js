import React from "react";

const Blog = () => {
  return (
    <div class="container text-center">
      <div class="row row-cols-1 my-5">
        <div class="col">
          <h5>What is Cors?</h5>
          <p>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request. An example of a cross-origin request: the front-end
            JavaScript code served from https://domain-a.com uses XMLHttpRequest
            to make a request for https://domain-b.com/data.json. For security
            reasons, browsers restrict cross-origin HTTP requests initiated from
            scripts. For example, XMLHttpRequest and the Fetch API follow the
            same-origin policy. This means that a web application using those
            APIs can only request resources from the same origin the application
            was loaded from unless the response from other origins includes the
            right CORS headers.
          </p>
        </div>
        <div class="col">
          <h5>
            4.2 Why are you using firebase? What other options do you have to
            implement authentication?
          </h5>
          <p>
            The Firebase Realtime Database lets you build rich, collaborative
            applications by allowing secure access to the database directly from
            client-side code. Data is persisted locally, and even while offline,
            realtime events continue to fire, giving the end user a responsive
            experience. When the device regains connection, the Realtime
            Database synchronizes the local data changes with the remote updates
            that occurred while the client was offline, merging any conflicts
            automatically. That's why we use firebase.
          </p>
          <p>
            There are some alternative of firebase. They are - 1. Back4App, 2.
            Backendless, 3. Kuzzle, 4. Pubnub, 5. Kumulos, 6. Appwrite etc.
          </p>
        </div>
        <div class="col">
          <h5>4.3 How does the private route work?</h5>
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
          </p>
        </div>
        <div class="col">
          <h5>4.4 What is Node? How does Node work?</h5>
          <p>
            As an asynchronous event-driven JavaScript runtime, Node.js is
            designed to build scalable network applications. In the following
            "hello world" example, many connections can be handled concurrently.
            Upon each connection, the callback is fired, but if there is no work
            to be done, Node.js will sleep.
          </p>
          <p>
            Node.js is similar in design to, and influenced by, systems like
            Ruby's Event Machine and Python's Twisted. Node.js takes the event
            model a bit further. It presents an event loop as a runtime
            construct instead of as a library. In other systems, there is always
            a blocking call to start the event-loop. Typically, behavior is
            defined through callbacks at the beginning of a script, and at the
            end a server is started through a blocking call like
            EventMachine::run(). In Node.js, there is no such
            start-the-event-loop call. Node.js simply enters the event loop
            after executing the input script. Node.js exits the event loop when
            there are no more callbacks to perform. This behavior is like
            browser JavaScript — the event loop is hidden from the user. HTTP is
            a first-class citizen in Node.js, designed with streaming and low
            latency in mind. This makes Node.js well suited for the foundation
            of a web library or framework. Node.js being designed without
            threads doesn't mean you can't take advantage of multiple cores in
            your environment. Child processes can be spawned by using our
            child_process.fork() API, and are designed to be easy to communicate
            with. Built upon that same interface is the cluster module, which
            allows you to share sockets between processes to enable load
            balancing over your cores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
