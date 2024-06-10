import Events from '../data/events.json';
import { resources, messages } from './stores';

function callEvent(id) {
    let event = Events[id];
    if (event.actions) {
        let actions = event.actions;
        for (let i = 0; i < actions.length; i++) {
            if (actions[i].type == "send_log") {
                messages.update((n) => [...n, actions[i].id]);
            }
            if (actions[i].type == "add_resource") {
                // Add the resource
                let resourceId = actions[i].id;
                let amount = actions[i].amount;
                resources.update(currentResources => {
                    // Find the resource to update
                    let resource = currentResources.find(res => res.id === resourceId);
                    if (resource) {
                        // Update the amount if the resource exists
                        resource.amount += amount;
                        resource.totalAmount += amount;
                    } else {
                        // Add new resource if it does not exist
                        currentResources.push({ id: resourceId, amount: amount, totalAmount: amount });
                    }
                    return currentResources;
                });
            }
        }
    }
}

export { callEvent };
