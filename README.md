# Dojo Blog

# Some Information

    - I will be following this [a react tutorial](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d).
    - I am starting this repository up to the end of the third video.

# Video Note(s) (if applicable):

    - Video 7:
        - When we wrap the handleClickAgain function inside of an anonymous function it will not be called right away.
        - When we reference a function we automatically get the event object.

    - Video 8:
        - useState hook allows component to be reactive and will trigger a re-rendering of the component.

    - Video 9:
        - likely no code changes because this video just discusses React Developer Tools.

    - Video 11:
        - This video starts with discussing how we don't want to repeat ourselves (DRY principle).
            - This can be done by creating a component that can just be put into different locations (web pages, or portions of a web page) that use the same logic.
        - We can pass in different forms of data into the reusable components and this will be done via "props."
            - The data can be different but the structure can be the same.
            - When we cannot compile due to "blogs" not existing there are a few workarounds mentioned.
                1. we can do a reinitialization/redeclaration of "blogs" inside of the BlogList component instead of in home.
                2. We can use props in which we pass the data from the Home component into the BlogList component.
                    a. This will make the BlogList component more re-usable.
                    b. Passing the data into the BlogList component will allow for us to still use the "blogs" data inside the Home component if needed.

    - Video 13:
        - When creating the handleDelete function do not define it inside of the BlogList component because we don't want to edit the blogs prop but rather we want to use the setBlogs function.
            - Doing the above will essentially allow us to interact with the data (blogs) directly.

    - Video 14:
        - useEffect: this hook runs a function every render of the component.
            - The component renders initially when it first loads and renders the contents inside of the return function.
            - The component also renders when the state changes.
                - The component is re-rendering to update the state in the browser.
            - useEffect is a way to run code on every render.
        - fetching data and communicating with some kind authentication service are both known as "side effects" in React.
        - note that when we delete a blog we notice that the "use effect ran" message is logged out to the console as well as when we initially load our page.
        - one thing to be cautious of is to not modify the state while we are in useEffect because this can potentially put the app into a loop.

    - Video 15:
        - We may not want to run a function every after single render. There may be some renders where we to run the useEffect hook.
            - There is an empty array argument which makes it so the useEffect is only ran once (during the initial render).
            - We can add dependencies to the array (2nd argument) such as any state values that should trigger the useEffect to run when these state values are changed.
            - A dependency can be a state variable which can just be added into the array.

    - Video 16:
        - When we use JSON Server each "top level property,"  is considered a resource.
            - Our "blogs" (from data/db.json) is an endpoint in which we can perform CRUD operations on it.
        - I deviated a little bit from how the video shows to install json-server
            - I just referred to [this link](https://www.npmjs.com/package/json-server)
                - I also just read a little bit under the "getting started" section.
            - I just installed json-server as a dev dependency.
                - I also referenced [this guide](https://spin.atomicobject.com/2018/10/08/mock-api-json-server/) for customizing a basic API server.
            - We'll be using the below endpoints.
                - /blogs (GET)
                - /blogs/{id}
                - /blogs (POST method)
                - /blogs/{id} (DELETE method)