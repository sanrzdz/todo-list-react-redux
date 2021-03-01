import { addTodo, ADD_TODO, deleteTodo, DELETE_TODO, toggleTodo, TOGGLE_TODO } from "./todos";

describe("Todo actions", () => {
	it(`Should return an action type ${ADD_TODO}`, () => {
		const expected = {
			type: ADD_TODO,
			text: "Review tests",
			id: 0,
		};

		const actual = addTodo("Review tests");

		expect(actual).toEqual(expected);
	});
	it(`Should return anohter action type ${ADD_TODO}`, () => {
		const expected = {
			type: ADD_TODO,
			text: "Check docs",
			id: 1,
		};

		const actual = addTodo("Check docs");

		expect(actual).toEqual(expected);
	});
	it(`Should return an action type ${TOGGLE_TODO}`, () => {
		const expected = {
			type: TOGGLE_TODO,
			id: 1,
		};
		const actual = toggleTodo(1);

		expect(actual).toEqual(expected);
	});
	it(`Should return an action type ${DELETE_TODO}`, () => {
		const expected = {
			type: DELETE_TODO,
			id: 3,
		};
		const actual = deleteTodo(3);

		expect(actual).toEqual(expected);
	});
});
