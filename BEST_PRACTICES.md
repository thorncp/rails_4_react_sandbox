- directory structure
   - __test__ 
   - actions
   - components
       - containers
   - reducers
   
- components
    - separate presentational and container components
        - [comparison] (http://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)
        - [explanation of container components] (https://medium.com/@learnreact/container-components-c0e67432e005)
    - use prop types
    - presentational components
        - write functional stateless components unless there is a need to use local state or the lifecycle methods
## TODO Discuss the following
- configuration
    - Use component specifc stylesheets only
    - Store package.json and yarn.lock in app/javascript
    - Create bin/yarn or bin/npm to run by looking in app/javascript
    - Change bin/webpack and bin/webpack-dev-server to look for node_modules in app/javascript/ 