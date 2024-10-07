// Import required packages
const { Agent, Config } = require('@fetchai/sdk');

(async () => {
    // Create a new agent
    const agent = new Agent();

    // Initialize the agent with your configuration
    await agent.connect(Config.default());

    // Log the agent's address
    console.log(`Agent address: ${agent.address}`);

    // Perform actions (e.g., sending a transaction, making a request)
    
    // Disconnect the agent
    await agent.disconnect();
})();