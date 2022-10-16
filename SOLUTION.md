### How much time did you spend on this test?

Answer: 5 days

---

### Why did you choose this particular boilerplate or framework?

Answer:

I have used Clean architecture. For great isolation of useCases, interface, infrastructure. Clean archi allow also easier testing and easier future changes on the code.

It's also very interesting to use redux toolkit. For async reducers use, syntax is short, and there's the possibility to test the store with Integration Tests. Clean archi & redux async makes a great combinaison for usecases testing.

We use the usecases functions in components, and the reducer with new state is automaticly triggered.

---

### What's your current experience in the framework you used? (no experience, beginner, advanced, expert)

Answer:

Redux (Redux Toolkit) advanced.

---

### What would be the improvements on the technical part if you had to send this app to production? (A more complete version is already in production)

Answer:

We could use Redux Saga I think (but never used). So it can allow to update the state directly on async redux functions. This would allow to remove the small part of business logic in useeffects dependencies.

---

### Have you met issues that you left on the side to finish in time and how would you solve them?

Answer:
- ARIA. We could add tabIndex to navigate between retailor and in the message list.
- I could add 2-3 functionals tests to be 100% sure what we have on the store is on the ui (I check only the store here, but it allow my tests to perform just in 3 seconds).