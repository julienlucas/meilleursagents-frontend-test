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

We could use Redux Saga. Redux saga allow to better manage sideeffects in async functions and make testing easier. But I never used it.

It need 1-2 functionnal tests to test not only the store but the ui.

---

### Have you met issues that you left on the side to finish in time and how would you solve them?

Answer:
I could add 1-2 functionals more tests to be 100% sure that what we have on the store is on the ui (I check only the store here, it allow my tests to perform in just in 2 seconds).