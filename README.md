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
