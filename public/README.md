The name of my project is A05-DevStack-Project

There are so many frontend, backend, database, and DevOps technologies available.Here you can browse them and decide which ones you actually want to use. The website has different technology cards, like React, Node.js, PostgreSQL, Docker and others. Each card shows some basic information such as its rating, difficulty, category, and a short description. If I want to use a technology, I can click "Add to Stack", and it will appear in the "Your Stack" section. I can also remove individual technologies or clear the whole stack. I also used react-toastify for notifications, so whenever I add or remove something, a small message appears to let me know that the action worked.

#Technologies I used-

1.React with TypeScript
2.Vite
3.Tailwind CSS and DaisyUI
4.react-toastify
5.react-icons


Main features

1.I can add the technologies I want to my own stack.
2.I can remove technologies from my stack.
3.The website is responsive, so it also works properly on mobile. On smaller screens, the navbar becomes a hamburger menu.


1. What is JSX and why do we use it?

JSX is basically a way of writing HTML-like code inside JavaScript. For example, instead of creating a div using JavaScript methods, I can simply write <div>Hello</div>. I find it much easier to work with because the structure of the UI is much clearer, so it makes React components easier to write and understand.

2. What is the difference between Props and State?

The easiest way I understand it is that props are received from the parent, while state is managed inside the component. Props are used when a parent component wants to give some information to a child component, and the child can use that information but doesn't directly change it. State is something the component can update when something happens. In my project, techPromise is passed to Technologies as a prop, while selectedTechs is a state because its value changes when I add or remove technologies.

3. What does useState do, and where did you use it?

useState is used when I need a component to keep track of some information that can change. In my project, I used selectedTechs in Technologies.tsx to keep track of which technologies the user has selected. I also used isMenuOpen in Nav.tsx to control whether the mobile navigation menu is open or closed. When these values change, React updates the relevant part of the UI.

4. What does useEffect do, and why did you use it for the JSON data?

useEffect is useful when I need to perform something after the component renders. I used it because my technology information is stored in a separate data.json file, so I need to fetch that information and then use it in my component. I used useEffect to handle the fetching when the component loads, and after getting the data, I update the state and use that data to display the technology cards.

5. Why does every .map() item need a unique key?

When I use .map() to create a list, React needs a way to identify each individual item. That's why every item needs a unique key. For example, if I have React, Node.js, and Docker in my list and remove Node.js, React needs to know exactly which item was removed. In my project, I use the unique id of each technology as the key, which helps React keep track of the items properly.

6. What is conditional rendering? Give an example.

Conditional rendering means showing different things depending on a condition. For example, in StackCard.tsx, I check whether the user has selected any technologies. If there aren't any selected technologies, I show a message saying "No technologies selected yet." If there are selected technologies, I show the actual list instead. I used a ternary operator for this, so basically I'm checking whether selectedTechs is empty or not and showing the appropriate content based on that.

7. How does data flow between parent and child components?

In React, data usually goes from the parent component to the child through props. In my project, the parent gives StackCard the necessary information and also gives it an onRemove function. When the user clicks the remove button, StackCard calls onRemove(tech.id). The parent then handles the actual state change. So the child doesn't directly change the parent's state; it basically tells the parent which technology the user wants to remove, and the parent takes care of updating the state.