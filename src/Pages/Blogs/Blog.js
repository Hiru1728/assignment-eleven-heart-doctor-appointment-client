import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Difference between SQL and NoSQL!</h2>
                <hr />
                <h4>SQL</h4>
                <br />
                <p>1. SQL databases are primarily called RDBMS or Relational Databases.
                    <br />
                    2. Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems. <br />
                    3. Structured query language (SQL). <br />
                    4. SQL databases are table based databases. <br />
                    5. SQL databases have a predefined schema. <br />
                    6. SQL databases are vertically scalable. <br />
                    7. Oracle, Postgres, and MS-SQL. <br />
                </p>
                <h4>NoSQL</h4> <br />
                <p>1. NoSQL databases are primarily called as Non-relational or distributed database.
                    <br />
                    2. NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application. <br />
                    3. No declarative query language. <br />
                    4. NoSQL databases can be document based, key-value pairs, graph databases. <br />
                    5. NoSQL databases use dynamic schema for unstructured data. <br />
                    6. NoSQL databases are horizontally scalable. <br />
                    7. MongoDB, Redis, Neo4j, Cassandra, Hbase. <br />
                </p>
            </div>

            <div className="card-body">
                <h2 className="card-title">What is JWT, how does it work?</h2>
                <hr />
                <h4>What is JWT?</h4> <br />
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <br />
                <h4>how does it work?</h4>
                <br />
                <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    <br />
                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    <br />
                    Once decoded, you will get two JSON strings:
                    <br />
                    The header and the payload.
                    The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.
                    <br />
                    The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
                    <br />
                    There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.
                    <br />
                    The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature</p>
            </div>
            <div className="card-body">
                <h2 className="card-title">What is the difference between JavaScript and NodeJS</h2>
                <hr />
                <h4>JavaScript</h4>
                <br />
                <p>1. Javascript is a programming language that is used for writing scripts on the website. <br />
                    2. Javascript can only be run in the browsers. <br />
                    3. It is basically used on the client-side. <br />
                    4. Javascript is capable enough to add HTML and play with the DOM. <br />
                    5. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br />
                    6. Javascript is used in frontend development. <br />
                    7. Some of the javascript frameworks are RamdaJS, TypedJS, etc. <br />
                    8. It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. <br />
                </p>
                <br />
                <h4>NodeJS</h4>
                <br />
                <p>1. NodeJS is a Javascript runtime environment.
                    <br />
                    2. We can run Javascript outside the browser with the help of NodeJS. <br />
                    3. 	It is mostly used on the server-side. <br />
                    4. Nodejs does not have capability to add HTML tags. <br />
                    5. V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br />
                    6. Nodejs is used in server-side development. <br />
                    7. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. <br />
                    8. Nodejs is written in C, C++ and Javascript. <br />
                </p>
            </div>
            <div className="card-body">
                <h2 className="card-title">How does NodeJS handle multiple request at the same time?</h2>
                <hr />
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                    <br />
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;