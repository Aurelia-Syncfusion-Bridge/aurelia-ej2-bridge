/**
 * Fire bubbling DOM event on an element
 * @param element The Element which the DOM event will be fired on
 * @param name The Event's name
 * @param data The data to attach to an event
 */
export function fireEvent(element: Element, name: string, data = {}) {
	const event = new CustomEvent(name, {
		detail: data,
		bubbles: true
	});
	element.dispatchEvent(event);

	return event;
}

/**
 * Fire DOM event on an element with custom payload
 * @param element The Element which the DOM event will be fired on
 * @param name The Event's name
 * @param eventInitDict The payload data to attach to an event
 */
export function fireEventWithCustomInit(element: Element, name: string, eventInitDict?: CustomEventInit<{}>) {

  const event = new CustomEvent(name, eventInitDict);

	element.dispatchEvent(event);

	return event;
}
