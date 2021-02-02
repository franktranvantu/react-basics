Whenever you need to update state based on previous state, you shouldn't rely on this.state to calculate the next state. 

State updates may be asynchronous, so it may not always lead to the component re-rendering with new data, and could cause state inconsistency. setState() accepts a callback function that produces state based on the previous state in a more reliable way.