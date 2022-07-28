/**
 *
 *
 *
 * Microservice architecture oriented to frontent => Microfronteds:
 *
 * Microservices characteristics:
 *  - Single purpuse: The service should be focused on one and only one purpose. I.e: Auth.
 *  - High cohesion: The service should be self-sufficient in terms of domain requirements and domain infrastructure.
 *  - Decentralized: The service should be decentralized from other services and infrastructure from a logical point of
 *                   view such that any changes required in the microservice should not involve changes in any other
 *                   microservice.
 *  Using this architecture, team can be splitted into multiple teams, each team in charge of one or multiple
 *  microservices.
 *  Usually this architecture brings a lot of disponibility but can be hard to mantain if the dev team is small.
 *
 *  Microfronteds: The idea behind microfrontends it's to build a single page application (SPA) which sits on top of a
 *  micro service architecture. Think about a web app as a composition of features that are owned by different teams,
 *  each team has their own area of business and mission. Each team develops their own features end-to-end, from
 *  database to user interface.
 *
 *  Principles:
 *  - Be Technology agnostic: each microfrontend is able to choose their stack without affecting other teams
 *  - Isolate Team Code: Don't share a runtime even if other teams use the same framework. Don't rely on global state
 *    or global variables.
 *  - Establish Team Prefixes: Agree on naming conventions where isolation is not possible yet. This to avoid collisions
 *  - Favor Native Browser features over Custom APIs: To communicate between frontends its better to use Browser events
 *                                                    instead of building a messaging system. Keep it simple
 *  - Build a Resilient site: Load and performance matters, your feature should be useful even if JS hasn't loaded or
 *                            other features die. Server side rendering can help a lot here.
 *
 *
 *
 *
 *
 *
 *
 * ==================================================================================================================================================================================================================================================================
 *
 *
 *
 *
 *
 *  Backend for frontends (BFF): Requirements of multiple views of applications differ signifi depending on platforms
 *  (mobile, desktop, etc.), this makes serving the backend for multiple platforms very difficult and demanding, and
 *  it could cause the backend to not fulfit the needs of the views easily becoming a bottleneck.
 *
 *  Here comes the BFF architecture to improve user experience. A BFF layer consists on one or multiple backends developed
 *  with the only purpose of address the needs of any frontend.
 *
 *  Benefits of BFF:
 *    - Multiple frontends can call their respective BFF backends in parallel, and the services will respond faster.
 *    - It reduces the time to make modifications.
 *    - The BFF can hide sensitive or unnecessary data before sending it to the frontend which simplifies the system.
 *    - BFFs can use any protocol like FTP, SOAP, REST, GraphQL to interact with others backends but still maintain
 *      the frontend protocol to communicate with the frontend.
 *
 *  Cons of using BFF:
 *    - Doing fan outs can be quite difficult
 *    - It depends on other backends which can impact the frontend if one of them fails
 *    - It can lead to code duplication among teams (double the development costs)
 *
 *    These are minimun costs that can be solved using different strategies in order to benefit from this pattern.
 *
 *    When to use?
 *    - If the software is supposed to use a shared or general-purpuse backend service that is hard to maintain.
 *    - If the software uses different frontend platforms with different requirements such as mobile, desktop etc.
 *    - In case the software needs an optimized backend for a specific frontend interface.
 *
 */
