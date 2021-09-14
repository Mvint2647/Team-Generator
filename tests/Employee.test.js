const { hasUncaughtExceptionCaptureCallback } = require('process');
const { TestScheduler } = require('rxjs/testing');

const Employee = require('../lib/Employee');

test("can you make a new Employeee",() => {
    const e = new Employee ();
    expect(typeof(e)).toBe("object");

});
test("set name to constructor",() => {
    const name = "Kayla";
    const e = new Employee(name);
    expect(e.name).toBe(name);

});
test("set id to constructor",() => {
    const testValue = 100;
    const e = new Employee ("Mel", testValue);
    expect(e.id).toBe(testValue);

});
test("set email to constructor",() => {
    const testValue = "Demo@test.com";
    const e = new Employee("Mel", 1, testValue);
    expect(e.id).toBe(testValue);

});
test("can you make a new getName",() => {
    const testValue = "Kayla";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);

});